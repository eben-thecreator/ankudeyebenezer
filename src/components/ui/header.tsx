"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const routes = [
  { label: "WORKS", href: "/works" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
  { label: "ACADEMY", href: "/academy" },
  { label: "STORE", href: "/" },
  { label: "BLOG", href: "/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors ${
          scrolled
            ? "bg-[color:var(--color-light)]"
            : "bg-[color:var(--color-light)]"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-[1.25rem] font-extrabold tracking-tight text-[color:var(--color-dark)]"
            >
              ANKUDEY. <sup className="text-[0.6rem] align-super">  TM</sup>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {routes.map((r) => (
                <Link
                  key={`${r.href}-${r.label}`}
                  href={r.href}
                  className="text-sm font-bold text-[color:var(--color-dark)] hover:text-neutral-600"
                >
                  {r.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-[color:var(--color-dark)]"
              aria-label="Open navigation"
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-[2px] bg-current" />
                <span className="block w-6 h-[2px] bg-current" />
                <span className="block w-6 h-[2px] bg-current" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[color:var(--color-light)] md:hidden">
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <Link href="/" className="text-xl font-bold text-[color:var(--color-dark)]" onClick={() => setOpen(false)}>
              ANKUDEY<sup className="text-[0.6rem] align-super">TM</sup>
            </Link>
            <button
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
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-5">
            {routes.map((r) => (
              <Link
                key={`${r.href}-${r.label}`}
                href={r.href}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-[color:var(--color-dark)] tracking-wide"
              >
                {r.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
export { Header };