'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Clapperboard, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';



export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Architecture & Spatial Engineering",
      shortTitle: "ARCHITECTURE",
      href: "/architecture",
      icon: Building2,
      image: "/images/services/architecture.jpg",
      description: "Delivering a seamless convergence of architectural creativity and engineering precision. We span the full lifecycle of the built environment, from innovative spatial design and drafting to advanced surveying and technical site analysis."
    },
    {
      title: "Visual Design",
      shortTitle: "VISUAL DESIGN",
      href: "/visual",
      icon: PenTool,
      image: "/images/services/visual.jpg",
      description: "Crafting distinctive visual identities that resonate and endure. We handle all aspects of graphic design, translating abstract concepts into compelling visual narratives through branding, typography, and strategic communication design."
    },
    {
      title: "Media & Entertainment",
      shortTitle: "MEDIA & ENTERTAINMENT",
      href: "/media",
      icon: Clapperboard,
      image: "/images/services/media.jpg",
      description: "Producing immersive content that captures attention and drives engagement. Our studio specializes in high-fidelity animations, cinematic video production, photography, and integrated media campaigns designed to tell your story with impact."
    }
  ];

  return (
    <main>

      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/landing/landing.jpg"
            alt="Showreel"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute bottom-0 left-0 z-10 w-full px-4 sm:px-12 pb-12 sm:pb-20">
          <div className="max-w-5xl bg-black/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
            <motion.h1
              className="text-white text-5xl md:text-6xl font-bold leading-tight tracking-tight"
              style={{ mixBlendMode: 'difference' }}
            >
              {[
                "WORKING ACROSS",
                "ENGINEERING, DESIGN AND",
                "TECHNOLOGY."
              ].map((line, lineIndex) => (
                <div key={lineIndex} className="block overflow-hidden">
                  {line.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block overflow-hidden mr-3">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.2 + (lineIndex * 0.1) + (wordIndex * 0.05)
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </div>
              ))}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              className="mt-4 sm:mt-6 text-white text-sm sm:text-base font-normal"
              style={{ mixBlendMode: 'difference' }}
            >
              Everything else grows from there
            </motion.p>
          </div>
        </div>
      </section>





      {/* ----------------------------------------------------------------------------------------------------------- */}




      {/* Services Section - Compact Hover-Reveal */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image that changes on hover */}
        <div className="absolute inset-0 transition-opacity duration-700">
          {services.map((service, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeService === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between py-20 px-4 sm:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 pb-8 border-b border-white/20"
          >
            <h2 className="text-xs sm:text-sm font-bold uppercase text-white/60 mb-2">Capabilities</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h3 className="text-3xl sm:text-4xl font-bold leading-tight max-w-xl text-white">
                We bring multidisciplinary expertise used to craft your vision.
              </h3>
              <Link 
                href="/contact" 
                className="hidden md:flex items-center gap-2 text-sm font-semibold text-white hover:text-white/70 transition-colors"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Services List */}
          <div className="flex-1 flex flex-col justify-center max-w-4xl">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveService(index)}
                className="group cursor-pointer border-b border-white/10 last:border-b-0"
              >
                <Link
                  href={service.href}
                  onFocus={() => setActiveService(index)}
                  className="flex items-center justify-between py-6 sm:py-8 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-lg sm:text-xl font-bold text-white/40 group-hover:text-white transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-10 w-[2px] bg-white/10 group-hover:bg-white transition-colors duration-300" />
                    <h4 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {service.shortTitle}
                    </h4>
                  </div>
                  <ArrowRight aria-hidden="true" className="w-6 h-6 sm:w-8 sm:h-8 text-white/40 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Active Service Description */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {services[activeService].description}
            </p>
          </motion.div>
        </div>
      </section>




    </main>
  );
}