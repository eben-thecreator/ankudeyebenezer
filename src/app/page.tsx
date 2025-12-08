'use client';

import Image from 'next/image';
import Link from 'next/link';


export default function Home() {

  return (
    <main>

      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image or video */}
        <div className="absolute inset-0">
          <Image
            src="/images/landing/landing.jpg"
            alt="Showreel"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 z-10 w-full px-6 sm:px-12 pb-10 sm:pb-16">
          <h1 className="max-w-5xl text-white text-4xl sm:text-6xl md:text-4xl font-extrabold  leading-tight">
            WORKING ACROSS<br />
            DESIGN, TECHNOLOGY AND <br />
            ENGINEERING.
          </h1>
          <p className="mt-4 text-white text-base sm:text-lg font-light">Everything else grows from there</p>
        </div>
      </section>

      {/* Services - inlined */}
      {
        /* service data inline so no extra files or slug routes */
      }
      <section className="w-full py-8 sm:py-12">
  <div className="max-w-7xl mx-auto space-y-8">
    {[
      {
        id: 'architecture',
        href: '/architecture',
        title: 'ARCHITECTURE',
        projects: 24,
        image: '/images/services/architecture.jpg',
        description:
          'Masterplanning, residential and commercial architectural design focused on craft and context-driven outcomes.',
      },
      {
        id: 'geospatial',
        href: '/geospatial',
        title: 'GEOSPATIAL ENGINEERING',
        projects: 18,
        image: '/images/services/geospatial.jpg',
        description:
          'Spatial data modelling, GIS analysis, and mapping for precise decision-making and infrastructure planning.',
      },
      {
        id: 'product',
        href: '/product',
        title: 'PRODUCT & BRAND',
        projects: 31,
        image: '/images/services/digital.jpg',
        description:
          'End-to-end product design and brand systems that align strategy, experience and visual identity.',
      },
      {
        id: 'media',
        href: '/media',
        title: 'MEDIA & ENTERTAINMENT',
        projects: 27,
        image: '/images/services/media.jpg',
        description:
          'Creative direction, production and experiential media for compelling storytelling across platforms.',
      },
    ].map((s) => (
      <Link
        key={s.id}
        href={s.href}
        className="group relative w-full overflow-hidden rounded-sm shadow-sm block"
        style={{ height: '72vh' }}
      >
        <article className="w-full h-full">
          {/* Background image */}
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50 transition duration-500 group-hover:bg-black/60" />
          </div>

          {/* Original layout but with micro-animations */}
          <div className="relative z-10 h-full flex items-center">
            <div className="w-full px-6 sm:px-12 grid grid-cols-12 items-center">

              {/* LEFT SIDE (title + count) */}
              <div className="col-span-4 text-left text-white flex flex-col justify-center space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold transform transition-all duration-500 group-hover:-translate-y-1">
                {s.title}
              </h3>
              <div className="text-sm tracking-widest opacity-80 transition-all duration-500 group-hover:opacity-100">
                {s.projects}
              </div>
            </div>

            {/* RIGHT SIDE (description) */}
            <div className="col-span-8 text-right text-white flex items-center">
              <p className="max-w-3xl ml-auto text-xs sm:text-sm font-light leading-relaxed opacity-90 transform transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100">
                {s.description}
              </p>
            </div>
          </div>
        </div>

            {/* Arrow */}
            <div className="absolute right-6 bottom-6 z-20 transition-transform duration-500 group-hover:rotate-12">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white backdrop-blur-sm group-hover:bg-white/20 transition">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </article>
        </Link>
    ))}
  </div>
</section>

<section>dont forget to implement the store section..     products  or crafts or whatever
   </section> </main>
  );
}