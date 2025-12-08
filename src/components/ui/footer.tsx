'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const SITEMAP_LINKS = [
  { label: 'Work', href: '/works/grid-view' },
  { label: 'About', href: '/about' },
  { label: 'News', href: '/blog' },
  { label: 'Careers', href: '/careers' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/ebthecreator' },
  { label: 'X.com', href: 'https://x.com/ankudey' },
  { label: 'Threads', href: 'https://www.threads.net/@arcc.spaces' },
];

export function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-GH', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-neutral-400 py-12">
      <div className="container-custom">
        {/* Main Content */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8  pt-8"> */}
          {/* Sitemap */}
          {/* <div>
            <h4 className="text-xs uppercase tracking-wider mb-4">Sitemap</h4>
            <ul className="space-y-2">
              {SITEMAP_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Location */}
          {/* <div>
            <h4 className="text-xs uppercase tracking-wider mb-4">Location</h4>
            <p className="text-white">Accra, Ghana</p>
            <p>{currentTime}</p>
          </div> */}

          {/* Socials */}
          {/* <div>
            <h4 className="text-xs uppercase tracking-wider mb-4">Socials</h4>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Newsletter */}
          {/* <div>
            <h4 className="text-xs uppercase tracking-wider mb-4">Newsletter</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border-b border-neutral-600 pb-1 pr-6 focus:outline-none focus:border-white text-white placeholder-neutral-500"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-1"
                aria-label="Subscribe"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div> */}
        

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 text-xs">
          <p>© Ankudey. {new Date().getFullYear()}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/legal"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              By Ankudey.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}