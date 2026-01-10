'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ProjectCard } from '@/components/ui/project-card';

interface AcademyItem {
    id: string;
    slug: string;
    title: string;
    description?: string;
    image: string;
    status: 'upcoming' | 'ongoing' | 'previous';
    date?: string;
    category?: string;
    [key: string]: any;
}

export default function AcademyPage() {
    const [items, setItems] = useState<AcademyItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAcademyData = async () => {
            try {
                const res = await fetch('/data/academy.json');
                if (!res.ok) throw new Error('Failed to fetch data');
                const data = await res.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching academy data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAcademyData();
    }, []);

    // Group items by status
    const ongoing = items.filter(i => i.status === 'ongoing');
    const upcoming = items.filter(i => i.status === 'upcoming');
    const previous = items.filter(i => i.status === 'previous');

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] sm:h-[80vh] overflow-hidden bg-black">
                {/* Fallback dark bg if no image, or we can use a generic academy image */}
                <div className="absolute inset-0 opacity-60">
                    {/* Ideally this would be a real image, using a placeholder for now if needed, or visual abstract */}
                    <div className="w-full h-full bg-neutral-900" />
                </div>

                <div className="absolute bottom-0 left-0 z-10 w-full px-4 sm:px-12 pb-8 sm:pb-16 text-white">
                    <h1 className="max-w-5xl text-4xl sm:text-7xl font-extrabold tracking-tight mb-4 uppercase">
                        The Academy
                    </h1>
                    <p className="max-w-2xl text-lg sm:text-xl font-light opacity-90">
                        Training the next generation of designers, architects, and creators.
                    </p>
                </div>
            </section>

            <div className="w-full px-4 sm:px-12 py-20 space-y-24">

                {/* Ongoing Sessions */}
                {ongoing.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            Ongoing Sessions
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                            {ongoing.map(item => (
                                <ProjectCard
                                    key={item.id}
                                    project={{ ...item, year: item.date }} // map date to year for display
                                    serviceRoot="/academy"
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* Upcoming Classes */}
                {upcoming.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-8">Upcoming Classes</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                            {upcoming.map(item => (
                                <ProjectCard
                                    key={item.id}
                                    project={{ ...item, year: item.date }}
                                    serviceRoot="/academy"
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* Previous Classes */}
                {previous.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-8 text-neutral-500">Archive</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 opacity-75 hover:opacity-100 transition-opacity">
                            {previous.map(item => (
                                <ProjectCard
                                    key={item.id}
                                    project={{ ...item, year: item.date }}
                                    serviceRoot="/academy"
                                />
                            ))}
                        </div>
                    </section>
                )}

                {loading && (
                    <div className="w-full h-40 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    </div>
                )}

            </div>
        </main>
    );
}
