'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function ArchitecturePage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
  const fetchProjects = async () => {
    try {
      const res = await fetch('/data/architecture.json');

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setProjects(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([]);
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
      {/* Hero Section - Similar to Homepage */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/architecture.jpg"
            alt="Architecture Showreel"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 z-10 w-full px-4 sm:px-12 pb-10 sm:pb-16">
          <h1 className="max-w-5xl text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            ARCHITECTURE
          </h1>
          <p className="mt-4 text-white text-base sm:text-lg font-light max-w-3xl">
            Masterplanning, residential and commercial architectural design focused on craft and context-driven outcomes.
          </p>
        </div>
      </section>

      {/* Portfolio Section with Filter */}
      <section className="w-full py-20 px-4 sm:px-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-2">
            {/* Left Sidebar - Filter (Sticky) */}
            <aside className="w-full lg:w-32 lg:flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-sm font-bold">Filter</h3>
                <div className="space-y-[-8px]">
                  {/* All Button */}
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-0 py-2 text-sm transition-all duration-300 ${
                      selectedCategory === null
                        ? 'text-black font-bold'
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
                          ? 'text-black font-bold'
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className="flex-1">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8">
    {filteredProjects.map((p: any) => (
      <Link key={p.id} href={`/architecture/${p.slug}`}>
        <article className="group cursor-pointer">
          {/* Image */}
          <div
            className="relative w-full overflow-hidden mb-4 bg-gray-200"
            style={{ aspectRatio: '16 / 9' }}
          >
            {p.image ? (
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                No image
              </div>
            )}
          </div>

          {/* Text */}
          <div className="space-y-1">
            <h2 className="text-sm font-bold text-gray-900 line-clamp-2">
              {p.title}
            </h2>

            {p.description && (
              <p className="text-xs text-gray-600 line-clamp-2">
                {p.description}
              </p>
            )}

            {/* Category + Year / Hover Action */}
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>{p.category || 'Project'}</span>

              <span className="relative">
                {/* Year */}
                <span className="block transition-opacity duration-200 group-hover:opacity-0">
                  {p.year || 'N/A'}
                </span>

                {/* Hover Text */}
                <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  View
                </span>
              </span>
            </div>
          </div>
        </article>
      </Link>
    ))}
  </div>

  {/* Empty State */}
  {filteredProjects.length === 0 && (
    <div className="text-center py-20">
      <p className="text-gray-600 text-sm">
        No projects found for the selected category.
      </p>
    </div>
  )}
</div>

          </div>
      </section>
    </main>
  );
}
