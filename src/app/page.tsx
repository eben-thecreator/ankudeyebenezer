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

        <div className="absolute bottom-0 left-0 z-10 w-full px-4 sm:px-12 pb-8 sm:pb-16">
          <h1 className="max-w-5xl text-white text-2xl sm:text-6xl md:text-4xl font-extrabold leading-tight">
            WORKING ACROSS<br />
            DESIGN, TECHNOLOGY AND <br />
            ENGINEERING.
          </h1>
          <p className="mt-3 sm:mt-4 text-white text-xs sm:text-lg font-light">Everything else grows from there</p>
        </div>
      </section>

      {/* Services - inlined */}
      {
        /* service data inline so no extra files or slug routes */
      }
      <section className="w-full py-6 sm:py-12">
  <div className="max-w-7xl mx-auto space-y-4 sm:space-y-8 px-4 sm:px-0">
    {[
      {
        id: 'architecture',
        href: '/architecture',
        title: 'ARCHITECTURE & SPATIAL ENGINEERING',
        projects: 24,
        image: '/images/services/architecture.jpg',
        description:
          'Masterplanning, residential and commercial architectural design focused on craft and context-driven outcomes.',
      },
      {
        id: 'visual',
        href: '/visual',
        title: 'BRAND & VISUAL DESIGN',
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
        style={{ height: '60vh' }}
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

          {/* Mobile: Stacked vertical layout | Desktop: Grid layout */}
          <div className="relative z-10 h-full flex flex-col sm:grid sm:grid-cols-12 sm:items-center justify-between p-4 sm:p-0 sm:px-12">

            {/* TOP/LEFT SECTION (title + count) */}
            <div className="sm:col-span-4 text-left text-white flex flex-col justify-start sm:justify-center space-y-2 sm:space-y-1 pt-4 sm:pt-0">
              <h3 className="text-lg sm:text-3xl font-extrabold leading-snug sm:leading-normal transform transition-all duration-500 group-hover:-translate-y-1">
                {s.title}
              </h3>
              <div className="text-xs sm:text-sm tracking-widest opacity-70 sm:opacity-80 transition-all duration-500 group-hover:opacity-100">
                {s.projects} PROJECTS
              </div>
            </div>

            {/* BOTTOM/RIGHT SECTION (description) */}
            <div className="sm:col-span-8 text-left sm:text-right text-white flex items-end sm:items-center mb-4 sm:mb-0">
              <p className="max-w-3xl text-xs sm:text-sm font-light leading-relaxed opacity-80 sm:opacity-90 transform transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100">
                {s.description}
              </p>
            </div>
          </div>
        </article>
        </Link>
    ))}
  </div>
</section>
 </main>
  );
}