'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Clapperboard, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';



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
          <motion.h1
            className="max-w-5xl text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight"
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
            className="mt-3 sm:mt-4 text-white text-s sm:text-lg font-bold"
          >
            Everything else grows from there
          </motion.p>
        </div>
      </section>





      {/* ----------------------------------------------------------------------------------------------------------- */}




      {/* Services Section */}
      <section className="w-full py-20 px-4 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b pb-8 border-gray-200"
        >
          <h2 className="text-xs sm:text-sm font-bold uppercase text-gray-500 mb-2">Capabilities</h2>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight max-w-xl">
              We bring multidisciplinary expertise used to craft your vision.
            </h3>
            <Link href="/contact" className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-gray-600 transition-colors">
              Start a project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <div className="flex flex-col">
          
          {[
            {
              title: "Architecture & Spatial Engineering",
              href: "/architecture",
              icon: Building2,
              image: "/images/services/architecture.jpg",
              description: "Delivering a seamless convergence of architectural creativity and engineering precision. We span the full lifecycle of the built environment, from innovative spatial design and drafting to advanced surveying and technical site analysis."
            },
            {
              title: "Visual Design",
              href: "/visual",
              icon: PenTool,
              image: "/images/services/visual.jpg",
              description: "Crafting distinctive visual identities that resonate and endure. We handle all aspects of graphic design, translating abstract concepts into compelling visual narratives through branding, typography, and strategic communication design."
            },
            {
              title: "Media & Entertainment",
              href: "/media",
              icon: Clapperboard,
              image: "/images/services/media.jpg",
              description: "Producing immersive content that captures attention and drives engagement. Our studio specializes in high-fidelity animations, cinematic video production, photography, and integrated media campaigns designed to tell your story with impact."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href={service.href}
                className="border-t-2 border-black py-12 flex flex-col md:flex-row gap-8 group"
              >
                {/* Left Column: Title with Index */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-start gap-4">
                    <span className="text-xl md:text-2xl font-bold text-gray-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter group-hover:text-gray-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Right Column: Description, Image, and Arrow */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Image */}
                  <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="flex justify-end">
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </section>




    </main>
  );
}