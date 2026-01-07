"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const routes = [
  { label: "WORKS", href: "/works" },
  { label: "ABOUT", href: "/about" },
  { label: "ACADEMY", href: "/academy" },
  { label: "STORE", href: "/" },
  { label: "BLOG", href: "/" },
  { label: "CONTACT", href: "/contact", cta: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 bg-[color:var(--color-light)] transition-colors px-4 sm:px-12"
        role="banner"
      >
        <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-[1.25rem] font-extrabold tracking-tight text-[color:var(--color-dark)]"
            >
              ANKUDEY.
              <sup className="text-[0.6rem] align-super">TM</sup>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" role="navigation">
              {routes.map(({ href, label, cta }) =>
                cta ? (
                  <Link
                    key={label}
                    href={href}
                    className="
                      ml-2
                      px-4 py-2
                      text-sm font-bold
                      bg-black text-white
                      transition-all duration-300 ease-out
                      hover:bg-transparent hover:text-black
                    "
                  >
                    {label}
                  </Link>
                ) : (
                  <Link
                    key={label}
                    href={href}
                    className="text-sm font-bold text-[color:var(--color-dark)] hover:text-neutral-600 transition-colors"
                  >
                    {label}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden text-[color:var(--color-dark)]"
              aria-label="Open navigation"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-[2px] bg-current" />
                <span className="block w-6 h-[2px] bg-current" />
                <span className="block w-6 h-[2px] bg-current" />
              </div>
            </button>
          </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-50 bg-[color:var(--color-light)] md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <Link
              href="/"
              className="text-xl font-bold text-[color:var(--color-dark)]"
              onClick={() => setOpen(false)}
            >
              ANKUDEY
              <sup className="text-[0.6rem] align-super">TM</sup>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-[color:var(--color-dark)]"
              aria-label="Close navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-5" role="navigation">
            {routes.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-[color:var(--color-dark)] tracking-wide"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

export { Header };
