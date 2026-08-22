"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const REFERRAL_URL = "https://forms.clickup.com/9017869850/f/8cr3hgu-14037";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100/60 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/mr-logo.png"
            alt="MR Residential Care logo"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="text-[15px] font-semibold tracking-tight text-navy-900">
            MR Residential Care
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-navy-600 transition-colors hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-navy-900 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-800 sm:inline-block"
          >
            Make a Referral
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-navy-900 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2.5 5.5H17.5M2.5 10H17.5M2.5 14.5H17.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy-100/60 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-navy-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-navy-900 px-5 py-3 text-center text-[14px] font-semibold text-white"
            >
              Make a Referral
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
