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





{/* ----------------------------------------------------------------------------------------------------------- */}
 
 
 

{/* Services Section */}
<section className="w-full py-16 sm:py-20 px-4 sm:px-12">
  <h2 className="text-xs sm:text-lg font-bold mb-12">Services</h2>

  {/* OUTER GRID — columns only */}
  <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-x-4">

    {/* LEFT COLUMN */}
    <a
      href="/architecture"
      className="flex flex-col group cursor-pointer"
    >
      <h3 className="text-xs sm:text-lg font-bold mb-4">
        Architecture & Spatial Engineering
      </h3>

      <div className="relative w-full h-[360px] md:h-[620px] bg-[#D1D1D1]">
        <Image
          src="/images/services/architecture.jpg"
          alt="Architecture & Spatial Engineering"
          fill
          priority
          className="
            object-cover
            transition-[filter] duration-300 ease-out
            group-hover:brightness-95
          "
        />
      </div>

      <div className="mt-6 flex justify-between text-xs sm:text-sm">
        <div className="flex flex-col gap-1">
          <span className="font-bold">Residential</span>
          <span className="font-bold">Public / Civic</span>
          <span className="font-bold">3D Modelling & Digital Twins</span>
          <span className="font-bold">Architecture Visualization</span>
        </div>

        <div className="flex flex-col gap-1 text-right">
          <span className="font-bold">Topographic Surveying</span>
          <span className="font-bold">GIS & Mapping</span>
          <span className="font-bold">Photogrammetry</span>
          <span className="font-bold">GNSS & Positioning</span>
        </div>
      </div>
    </a>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col gap-24">

      {/* Visual Design */}
      <a
        href="/visual"
        className="flex flex-col group cursor-pointer"
      >
        <h3 className="text-xs sm:text-lg font-bold mb-4 ">
          Visual Design
        </h3>

        <div className="relative w-full h-[300px] bg-[#D1D1D1]">
          <Image
            src="/images/services/visual.jpg"
            alt="Visual Design"
            fill
            priority
            className="
              object-cover
              transition-[filter] duration-300 ease-out
              group-hover:brightness-95
            "
          />
        </div>

        <div className="mt-4 flex flex-col gap-1 text-xs sm:text-sm">
          <span className="font-bold">Graphic Design</span>
          <span className="font-bold">Branding Identity</span>
          <span className="font-bold">Posters</span>
          <span className="font-bold">Digital Media</span>
        </div>
      </a>

      {/* Media & Entertainment */}
      <a
        href="/media"
        className="flex flex-col group cursor-pointer"
      >
        <h3 className="text-xs sm:text-lg font-bold mb-4">
          Media & Entertainment
        </h3>

        <div className="relative w-full h-[300px] bg-[#D1D1D1]">
          <Image
            src="/images/services/media.jpg"
            alt="Media & Entertainment"
            fill
            priority
            className="
              object-cover
              transition-[filter] duration-300 ease-out
              group-hover:brightness-95
            "
          />
        </div>

        <div className="mt-4 flex flex-col gap-1 text-xs sm:text-sm">
          <span className="font-bold">Campaigns</span>
          <span className="font-bold">Animation</span>
          <span className="font-bold">Media Production</span>
          <span className="font-bold">Video & Photography</span>
        </div>
      </a>

    </div>
  </div>
</section>




 </main>
  );
}