'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MediaPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/media.json', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        setProjects(data || []);
        if (data?.length) setSelectedProjectId(data[0].id);
      });
  }, []);

  const selectedProject =
    projects.find(p => p.id === selectedProjectId) || projects[0];

  return (
    <main className="h-screen bg-white px-10 pt-10 pb-6 overflow-hidden">
      <section className="h-full flex flex-col justify-between">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-[1.25fr_1fr] gap-12">
          {/* LEFT */}
          <div>
            <div className="w-full h-[360px] bg-gray-300 relative mb-4">
              {selectedProject?.image && (
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {/* BOTTOM META ROW (shared baseline) */}
            <div className="flex items-center gap-16 text-[13px] font-bold">
              <span>
                Deliverables: {selectedProject?.scope || 'Project deliverables'}
              </span>
              <span>{selectedProject?.year || '2021'}</span>
              <span>
                {selectedProject?.type ||
                  selectedProject?.category ||
                  'Residential'}
              </span>
              <span>{selectedProject?.location || 'Ghana'}</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col">
            <div className="text-[14px] font-bold mb-4">
              {selectedProject?.team?.[0] || 'Mr. John Smith'}
            </div>

            <div className="text-[13px] leading-[1.55] mb-10 max-w-[420px]">
              {selectedProject?.description ||
                'Project description goes here.'}
            </div>

            {/* TITLE — sits lower, visually weighted */}
            <div className="font-bold text-[40px] leading-[1.05]">
              Projects
              <br />
              Name Title.
            </div>
          </div>
        </div>

        {/* GALLERY ROW */}
        <div className="grid grid-cols-8 gap-5 mt-10">
          {projects.slice(0, 8).map((item, i) => (
            <button
              key={item.id}
              onClick={() => setSelectedProjectId(item.id)}
              className="flex flex-col focus:outline-none"
            >
              <div
                className={`text-[13px] font-bold mb-2 ${
                  selectedProjectId === item.id
                    ? 'opacity-100'
                    : 'opacity-60'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div
                className={`w-full aspect-square bg-gray-300 relative ${
                  selectedProjectId === item.id
                    ? 'opacity-100'
                    : 'opacity-60'
                }`}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
