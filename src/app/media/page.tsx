import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default async function MediaPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/data/media.json`, { cache: 'no-store' });
  const projects = (await res.json()) || [];
  return (
    <main className="w-full">
      {/* Header section */}
      <section className="relative w-full h-96 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-start justify-end px-6 sm:px-12 pb-12">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-3">MEDIA & ENTERTAINMENT</h1>
          <p className="text-lg text-gray-300 max-w-2xl">Creative direction, production and experiential media for compelling storytelling across platforms.</p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="w-full py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p: any, idx: number) => (
              <Link key={p.id} href={`/media/${p.slug}`}>
                <article
                  className="group relative w-full overflow-hidden rounded-sm shadow-lg transition-all duration-500 cursor-pointer"
                  style={{ height: idx === 0 ? '500px' : '350px' }}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">No image</div>
                  )}
                  <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/50" />

                  {/* Text overlay - bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white transform transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-xs uppercase tracking-widest text-gray-300 mb-2">{p.category || 'Project'}</p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">{p.title}</h2>
                    {p.description && <p className="mt-3 text-sm text-gray-200 line-clamp-2">{p.description}</p>}
                  </div>

                  {/* Arrow icon */}
                  <div className="absolute top-6 right-6 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white backdrop-blur-sm group-hover:bg-white/30">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
