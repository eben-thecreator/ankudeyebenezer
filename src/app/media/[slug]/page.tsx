import React from 'react';

export default async function MediaProjectPage({ params }: { params: { slug: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/data/media.json`, { cache: 'no-store' });
  const projects = (await res.json()) || [];
  const project = projects.find((p: any) => p.slug === params.slug);
  if (!project) {
    return <main className="p-6">Project not found</main>;
  }
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      {project.image ? <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-4" /> : null}
      <p className="text-gray-700">{project.description}</p>
    </main>
  );
}
