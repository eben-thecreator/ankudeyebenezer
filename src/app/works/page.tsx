'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { ProjectCard } from '@/components/ui/project-card';
import Image from 'next/image';

type ServiceType = 'All' | 'Architecture' | 'Visual' | 'Media';

interface Project {
    id: string;
    slug: string;
    title: string;
    category?: string;
    year?: number | string;
    image: string;
    serviceType: 'architecture' | 'visual' | 'media';
    [key: string]: any;
}

export default function WorksPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<ServiceType>('All');

    useEffect(() => {
        const fetchAllProjects = async () => {
            try {
                const [archRes, visualRes, mediaRes] = await Promise.all([
                    fetch('/data/architecture.json'),
                    fetch('/data/visual.json'),
                    fetch('/data/media.json')
                ]);

                const archData = await archRes.json();
                const visualData = await visualRes.json();
                const mediaData = await mediaRes.json();

                // Tag data with service type for routing
                const taggedArch = Array.isArray(archData) ? archData.map((p: any) => ({ ...p, serviceType: 'architecture' })) : [];
                const taggedVisual = Array.isArray(visualData) ? visualData.map((p: any) => ({ ...p, serviceType: 'visual' })) : [];
                const taggedMedia = Array.isArray(mediaData) ? mediaData.map((p: any) => ({ ...p, serviceType: 'media' })) : [];

                // Combine and interleave for deterministic "shuffle"
                const maxLength = Math.max(taggedArch.length, taggedVisual.length, taggedMedia.length);
                const all: Project[] = [];

                for (let i = 0; i < maxLength; i++) {
                    if (taggedArch[i]) all.push(taggedArch[i]);
                    if (taggedVisual[i]) all.push(taggedVisual[i]);
                    if (taggedMedia[i]) all.push(taggedMedia[i]);
                }

                setProjects(all);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllProjects();
    }, []);

    const filteredProjects = useMemo(() => {
        if (filter === 'All') return projects;
        return projects.filter(p =>
            (filter === 'Architecture' && p.serviceType === 'architecture') ||
            (filter === 'Visual' && p.serviceType === 'visual') ||
            (filter === 'Media' && p.serviceType === 'media')
        );
    }, [projects, filter]);

    const tabs: ServiceType[] = ['All', 'Architecture', 'Visual', 'Media'];

    return (
        <main className="w-full pt-32 pb-20 px-4 sm:px-12 min-h-screen">

            {/* Header */}
            <div className="mb-16">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
                    SELECTED WORKS
                </h1>
                <p className="max-w-2xl text-lg font-light text-neutral-600">
                    A collection of projects spanning architecture, visual design, and media entertainment.
                </p>
            </div>

            {/* Filters */}
            <div className="mb-12 border-b border-neutral-200 pb-4">
                <div className="flex flex-wrap gap-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`
                text-sm font-bold tracking-wide uppercase transition-colors
                ${filter === tab ? 'text-black' : 'text-neutral-400 hover:text-neutral-600'}
              `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            {loading ? (
                <div className="w-full h-64 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={`${project.serviceType}-${project.id}`}
                            project={project}
                            serviceRoot={`/${project.serviceType}`}
                        />
                    ))}
                </div>
            )}

            {!loading && filteredProjects.length === 0 && (
                <div className="py-20 text-center text-neutral-500">
                    No projects found.
                </div>
            )}

        </main>
    );
}
