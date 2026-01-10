'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function VisualPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/data/visual.json`, { cache: 'no-store' });
        const data = await res.json();
        setProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Get unique project categories for filter
  const projectCategories = useMemo(() => {
    const categories = projects.map((p) => p.category).filter(Boolean);
    return [...new Set(categories)];
  }, [projects]);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <main className="w-full">
      {/* Hero Section - Similar to Architecture Page */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/visual.jpg"
            alt="Visual Design"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 z-10 w-full px-4 sm:px-12 pb-8 sm:pb-16">
          <h1 className="max-w-5xl text-white text-2xl sm:text-6xl md:text-4xl font-extrabold leading-tight">
            VISUAL & GRAPHIC DESIGN
          </h1>
          <p className="mt-4 text-white text-base sm:text-lg font-light max-w-3xl">
            Bold design systems, compelling visual identities and sophisticated graphic design for print and digital media.
          </p>
        </div>
      </section>

      {/* Portfolio Section with Filter */}
      <section className="w-full py-20 px-4 sm:px-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            {/* Left Sidebar - Filter (Sticky) */}
            <aside className="w-full lg:w-32 lg:flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-sm font-extrabold text-gray-900 mb-6 uppercase tracking-widest">Filter</h3>
                <div className="space-y-1">
                  {/* All Button */}
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-0 py-2 text-sm transition-all duration-300 ${
                      selectedCategory === null
                        ? 'text-black font-semibold'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    All
                  </button>

                  {/* Category Filters */}
                  {projectCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-0 py-2 text-sm transition-all duration-300 ${
                        selectedCategory === category
                          ? 'text-black font-semibold'
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right Side - Masonry Portfolio Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {filteredProjects.map((p: any, idx: number) => {
                  let gridColSpan = 'sm:col-span-1';
                  let aspectRatio = '1 / 1'; // Default square

                  // Create a pattern: portrait, landscape, square, square, portrait, landscape, etc.
                  const pattern = idx % 6;
                  if (pattern === 0) {
                    // Portrait
                    gridColSpan = 'sm:col-span-1';
                    aspectRatio = '3 / 4';
                  } else if (pattern === 1) {
                    // Landscape wide
                    gridColSpan = 'sm:col-span-2';
                    aspectRatio = '16 / 9';
                  } else if (pattern === 2) {
                    // Square
                    gridColSpan = 'sm:col-span-1';
                    aspectRatio = '1 / 1';
                  } else if (pattern === 3) {
                    // Square
                    gridColSpan = 'sm:col-span-1';
                    aspectRatio = '1 / 1';
                  } else if (pattern === 4) {
                    // Portrait tall
                    gridColSpan = 'sm:col-span-1';
                    aspectRatio = '2 / 3';
                  } else {
                    // Landscape
                    gridColSpan = 'sm:col-span-2';
                    aspectRatio = '16 / 9';
                  }

                  return (
                    <Link key={p.id} href={`/visual/${p.slug}`}>
                      <article className={`group cursor-pointer ${gridColSpan}`}>
                        {/* Image Container */}
                        <div
                          className="relative w-full overflow-hidden mb-4 bg-gray-200"
                          style={{ aspectRatio }}
                        >
                          {p.image ? (
                            <Image
                              src={p.image}
                              alt={p.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                              No image
                            </div>
                          )}
                        </div>

                        {/* Text Content Below Image */}
                        <div className="space-y-2">
                          {/* Title */}
                          <h2 className="text-sm font-semibold text-gray-900 group-hover:text-black transition-colors line-clamp-2">
                            {p.title}
                          </h2>

                          {/* Description - Show for landscape items */}
                          {(pattern === 1 || pattern === 5) && p.description && (
                            <p className="text-xs text-gray-600 line-clamp-2">{p.description}</p>
                          )}

                          {/* Category and Year Row */}
                          <div className="flex items-center justify-between text-xs">
                            {/* Category on Left */}
                            <p className="text-gray-600">
                              {p.category || 'Project'}
                            </p>

                            {/* Year on Right */}
                            <p className="text-gray-600">{p.year || 'N/A'}</p>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>

              {/* No Results Message */}
              {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-600 text-sm">No projects found for the selected category.</p>
                </div>
              )}
            </div>
          </div>
      </section>
    </main>
  );
}
    
