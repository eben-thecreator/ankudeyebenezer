'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<any>(null);
  const [allProjects, setAllProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/data/architecture.json`, { cache: 'no-store' });
        const data = await res.json();
        setAllProjects(data || []);

        // Find the current project
        const currentProject = data.find((p: any) => p.slug === slug);
        setProject(currentProject);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [slug]);

  if (loading) {
    return (
      <main className="w-full min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Loading project...</p>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
        <Link href="/architecture" className="text-black font-semibold hover:underline">
          Back to Architecture
        </Link>
      </main>
    );
  }

  // Get next and previous projects for navigation
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <main className="w-full">
      {/* Hero Section - Same as Architecture Page */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={project.image || '/images/services/architecture.jpg'}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 z-10 w-full px-6 sm:px-12 pb-10 sm:pb-16">
          <h1 className="max-w-5xl text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-white text-base sm:text-lg font-light max-w-3xl line-clamp-1">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-12">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Images and Videos */}
            <div className="space-y-8">
              {/* Main Project Image */}
              <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>

              {/* Gallery placeholder for additional images */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-1 gap-4">
                  {project.gallery.map((img: string, idx: number) => (
                    <div key={idx} className="relative w-full aspect-video overflow-hidden bg-gray-200">
                      <Image
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Video placeholder */}
              {project.videoUrl && (
                <div className="relative w-full aspect-video overflow-hidden bg-black">
                  <iframe
                    src={project.videoUrl}
                    title="Project Video"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Right Side - Project Details */}
            <div>
              {/* Overview - Sticky */}
              <div className="sticky top-24 space-y-8">
                {/* Project Title */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                </div>

                {/* Location Value - Below Title */}
                {project.location && (
                  <div className="-mt-13">
                    <p className="text-gray-700 text-sm">{project.location}</p>
                  </div>
                )}

                {/* Three Column Row: Client | Role | Team Members */}
                <div className="grid grid-cols-3 gap-12">
                  {project.client && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-600 mb-2">Client</h3>
                      <p className="text-gray-900 text-sm font-bold">{project.client}</p>
                    </div>
                  )}

                  {project.role && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-600 mb-2">Role</h3>
                      <p className="text-gray-900 text-sm font-bold">{project.role}</p>
                    </div>
                  )}

                  {project.team && project.team.length > 0 && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-600 mb-2">Team Members</h3>
                      <div className="space-y-1">
                        {project.team.map((member: string, idx: number) => (
                          <p key={idx} className="text-gray-900 text-sm font-bold">{member}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Three Column Row: Category (col 1) | Tags (col 2, under Role) */}
                <div className="grid grid-cols-3 gap-12">
                  {project.category && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-600 mb-2">Category</h3>
                      <p className="text-gray-900 text-sm font-bold">{project.category}</p>
                    </div>
                  )}

                  {project.tags && project.tags.length > 0 && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-600 mb-2">Tags</h3>
                      <p className="text-gray-900 text-sm font-bold">{project.tags.join(', ')}</p>
                    </div>
                  )}
                </div>

                {/* Overview Text */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-600 mb-2">Overview</h3>
                  <p className="text-black font-bold leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="w-full py-20 px-4 sm:px-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Previous Project Button */}
          {prevProject ? (
            <Link
              href={`/architecture/${prevProject.slug}`}
              className="ml-0 px-4 py-2 text-sm font-bold bg-black text-white transition-all duration-300 ease-out hover:bg-transparent hover:text-black w-full md:w-auto text-center"
            >
              ← Previous Project
            </Link>
          ) : (
            <span className="opacity-50 px-4 py-2 text-sm font-bold border border-gray-300 w-full md:w-auto text-center cursor-not-allowed">No previous project</span>
          )}

          {/* Next Project Button */}
          {nextProject ? (
            <Link
              href={`/architecture/${nextProject.slug}`}
              className="ml-0 px-4 py-2 text-sm font-bold bg-black text-white transition-all duration-300 ease-out hover:bg-transparent hover:text-black w-full md:w-auto text-center"
            >
              Next Project →
            </Link>
          ) : (
            <span className="opacity-50 px-4 py-2 text-sm font-bold border border-gray-300 w-full md:w-auto text-center cursor-not-allowed">No next project</span>
          )}
        </div>
      </section>

      {/* Back to Projects Link */}
      <section className="w-full py-16 px-4 sm:px-12 bg-gray-50">
        <div>
          <Link
            href="/architecture"
            className="ml-0 px-4 py-2 text-sm font-bold bg-black text-white transition-all duration-300 ease-out hover:bg-transparent hover:text-black w-full md:w-auto text-center inline-flex items-center gap-2"
          >
            ← Back to Architecture
          </Link>
        </div>
      </section>
    </main>
  );
}
