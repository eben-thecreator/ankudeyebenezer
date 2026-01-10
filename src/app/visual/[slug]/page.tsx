'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function VisualProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<any>(null);
  const [allProjects, setAllProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/data/visual.json', { cache: 'no-store' });
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
        <Link href="/visual" className="text-black font-semibold hover:underline">
          Back to Visual & Graphic Design
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
      {/* Hero Section - Same as Media Page */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={project.image || '/images/services/visual.jpg'}
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
          <h1 className="max-w-5xl text-white text-2xl sm:text-6xl md:text-4xl font-extrabold leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-white text-base sm:text-lg font-light max-w-3xl line-clamp-1">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="w-full py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
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

              {/* Videos Section */}
              {project.videos && project.videos.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Videos</h3>
                  {project.videos.map((video: any, idx: number) => (
                    <div key={idx} className="space-y-2">
                      <div className="relative w-full aspect-video overflow-hidden bg-black">
                        <iframe
                          src={video.url}
                          title={video.title}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                      {video.title && (
                        <p className="text-sm text-gray-700 font-medium">{video.title}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Gallery - Pictures Section */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Gallery</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {project.gallery.map((img: string, idx: number) => (
                      <div key={idx} className="relative w-full aspect-video overflow-hidden bg-gray-200">
                        <Image
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
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

                {/* Project Type - Below Title */}
                {project.type && (
                  <div className="-mt-6">
                    <p className="text-gray-700 text-sm">{project.type}</p>
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
                      <h3 className="text-xs font-semibold text-gray-600 mb-2">Team</h3>
                      <div className="space-y-1">
                        {project.team.map((member: string, idx: number) => (
                          <p key={idx} className="text-gray-900 text-sm font-bold">{member}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Three Column Row: Category | Year | Tags */}
                <div className="grid grid-cols-3 gap-12">
                  {project.category && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-600 mb-2">Category</h3>
                      <p className="text-gray-900 text-sm font-bold">{project.category}</p>
                    </div>
                  )}

                  {project.year && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-600 mb-2">Year</h3>
                      <p className="text-gray-900 text-sm font-bold">{project.year}</p>
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

                {/* Scope - If Available */}
                {project.scope && (
                  <div>
                    <h3 className="text-xs font-semibold text-gray-600 mb-2">Scope</h3>
                    <p className="text-gray-700 font-medium leading-relaxed text-sm">
                      {project.scope}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="w-full py-20 px-6 sm:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {/* Previous Project */}
            {prevProject ? (
              <Link href={`/visual/${prevProject.slug}`} className="group">
                <article className="space-y-4">
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
                    {prevProject.image && (
                      <Image
                        src={prevProject.image}
                        alt={prevProject.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="50vw"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">← Previous Project</p>
                    <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-black transition-colors">
                      {prevProject.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ) : (
              <div className="opacity-50">
                <div className="relative w-full aspect-video overflow-hidden bg-gray-200" />
                <p className="text-sm text-gray-600 mt-4">No previous project</p>
              </div>
            )}

            {/* Next Project */}
            {nextProject ? (
              <Link href={`/visual/${nextProject.slug}`} className="group text-right">
                <article className="space-y-4">
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
                    {nextProject.image && (
                      <Image
                        src={nextProject.image}
                        alt={nextProject.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="50vw"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Next Project →</p>
                    <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-black transition-colors">
                      {nextProject.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ) : (
              <div className="opacity-50 text-right">
                <div className="relative w-full aspect-video overflow-hidden bg-gray-200" />
                <p className="text-sm text-gray-600 mt-4">No next project</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Back to Projects Link */}
      <section className="w-full py-16 px-6 sm:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Link href="/visual" className="inline-flex items-center gap-2 text-black font-semibold hover:underline">
            ← Back to Visual & Graphic Design
          </Link>
        </div>
      </section>
    </main>
  );
}
