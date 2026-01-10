"use client";

import Image from 'next/image';
import Link from 'next/link';

export interface ProjectCardProps {
    project: {
        id: string;
        slug: string;
        title: string;
        description?: string;
        image: string;
        category?: string;
        year?: number | string;
        [key: string]: any;
    };
    serviceRoot: string; // e.g., "/architecture", "/visual"
}

export function ProjectCard({ project, serviceRoot }: ProjectCardProps) {
    // Construct the full link. Ensure serviceRoot doesn't have trailing slash and slug doesn't have leading slash duplication if possible.
    // Assuming serviceRoot is like "/architecture" and slug is "project-one"
    const href = `${serviceRoot}/${project.slug}`;

    return (
        <Link href={href} className="block group cursor-pointer h-full">
            <article className="h-full flex flex-col">
                {/* Image Container */}
                <div
                    className="relative w-full overflow-hidden mb-4 bg-[#D1D1D1]"
                    style={{ aspectRatio: '16 / 9' }}
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="
                object-cover
                transition-transform duration-500 ease-out
              "
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-black/50">
                            No image
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 space-y-1">
                    <h2 className="text-sm font-bold text-black line-clamp-2 uppercase tracking-tight">
                        {project.title}
                    </h2>

                    <div className="flex items-center justify-between text-xs text-neutral-600 mt-auto pt-2">
                        <span className="font-medium">{project.category || 'Project'}</span>

                        <span className="relative">
                            {/* Year shows by default */}
                            <span className="block transition-opacity duration-200 group-hover:opacity-0">
                                {project.year || 'N/A'}
                            </span>

                            {/* "View" shows on hover */}
                            <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 font-bold text-black">
                                View
                            </span>
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
