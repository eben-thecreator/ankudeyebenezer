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
 
 
 


      {/* Services Section - Interactive */}
      <section className="w-full min-h-[80vh] flex flex-col justify-between">
        {/* ServiceSection logic inlined here */}
        {/* --- ServiceSection START --- */}
        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
        {(() => {
          const { useState } = require("react");
          const [active, setActive] = useState(0);
          const SERVICES = [
            {
              key: "architecture",
              title: "Architecture & Spatial Engineering",
              description:
                "We deliver comprehensive architectural and spatial engineering solutions, integrating advanced 3D modeling, digital twins, and GIS mapping to create innovative environments. Our expertise spans residential, civic, and agricultural architecture, with a focus on context-driven design, precision surveying, and photogrammetry. From concept to completion, we ensure every project is crafted with technical excellence and creative vision, supporting clients with GNSS positioning, topographic analysis, and seamless project delivery.",
              categories: [
                ["Residential", "Public / Civic", "3D Modelling & Digital Twins", "Agricultural Architecture"],
                ["GIS & Mapping", "Photogrammetry", "GNSS & Positioning", "Topographic Surveying"],
              ],
              image: "/images/works/arch1.jpg",
              button: "Explore more works",
            },
            {
              key: "visual",
              title: "Visual Design",
              description:
                "We craft compelling visual identities and digital experiences, specializing in graphic design, branding, posters, and digital media. Our team brings ideas to life with creative storytelling and impactful visuals, ensuring your brand stands out across all platforms.",
              categories: [
                ["Graphic Design", "Branding Identity", "Posters", "Digital Media"],
              ],
              image: "/images/works/5.jpg",
              button: "Explore visual works",
            },
            {
              key: "media",
              title: "Media & Entertainment",
              description:
                "From campaigns to animation, media production, and photography, we deliver engaging content for every audience. Our expertise covers the full spectrum of media creation, from concept to final cut, ensuring your message resonates and inspires.",
              categories: [
                ["Campaigns", "Animation", "Media Production", "Video & Photography"],
              ],
              image: "/images/works/media1.jpg",
              button: "Explore media works",
            },
          ];
          const Image = require("next/image").default;
          return (
            <div className="flex flex-col md:flex-row w-full mx-auto pt-4 px-4 sm:px-12 gap-8">
              {/* Left Titles */}

              <div className="md:w-auto flex flex-col relative gap-1 pb-0">
                <div>
                  {SERVICES.map((service, idx) => (
                    <div
                      key={service.key}
                      className={`w-fit text-2xl sm:text-6xl md:text-4xl font-extrabold leading-tight mt-2 transition-colors duration-200 cursor-pointer px-2 py-1 ${
                        active === idx ? "bg-black text-white" : "text-black hover:bg-black/80 hover:text-white"
                      }`}
                      onClick={() => setActive(idx)}
                      tabIndex={0}
                    >
                      {service.title}
                    </div>
                  ))}
                </div>
                {/* Absolutely positioned service categories to align with image bottom */}
                <div className="absolute left-0 w-full" style={{bottom: 0, height: '180px'}}>
                  <div className="flex flex-col sm:flex-row gap-4 h-full items-end">
                    {SERVICES[active].categories.map((col, i) => (
                      <div key={i} className="flex-1 space-y-[-2px] text-xs sm:text-lg font-light pb-2">
                        {col.map((cat) => (
                          <div key={cat}>{cat}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Invisible reference for 'works' alignment */}
                <div className="hidden md:block mt-12" id="works-align-ref"></div>
              </div>

              {/* Right Content - visually align under 'works' */}
              <div
                className="flex-1 flex flex-col justify-between gap-4 mt-4 md:mt-0 relative min-h-[260px]"
              >
                {/* Top Paragraph */}
                <div className="text-xs sm:text-lg font-light max-w-xl ">{SERVICES[active].description}</div>

                {/* Service Categories moved to left content */}

                {/* Explore Button & Image */}
                <div className="mt-4 w-full flex flex-col gap-1">
                  <button className="w-full bg-black text-white font-semibold py-3 text-sm md:text-base text-left px-4">
                    Explore works
                  </button>
                  <div className="w-full h-[140px] md:h-[180px] bg-[#D1D1D1] relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/works/arch1.jpg"
                      alt="Service Preview"
                      fill
                      className="object-cover object-bottom"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
        {/* --- ServiceSection END --- */}
      </section>
 </main>
  );
}