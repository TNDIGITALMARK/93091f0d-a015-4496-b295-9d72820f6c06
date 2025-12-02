"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <nav className="bg-navy fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/images/icons/logo-icon.svg"
              alt="Logo"
              width={40}
              height={40}
              className="text-white"
            />
            <span className="text-white font-black text-xl tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              APPAREL CUSTOMS
            </span>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:opacity-80 transition-opacity text-sm font-medium uppercase tracking-wide">
              Home
            </Link>
            <Link href="#gallery" className="text-white hover:opacity-80 transition-opacity text-sm font-medium uppercase tracking-wide">
              Design Gallery
            </Link>
            <Link href="#upload" className="text-white hover:opacity-80 transition-opacity text-sm font-medium uppercase tracking-wide">
              Create Your Own
            </Link>
            <Link href="#about" className="text-white hover:opacity-80 transition-opacity text-sm font-medium uppercase tracking-wide">
              About Us
            </Link>
            <Link href="#contact" className="text-white hover:opacity-80 transition-opacity text-sm font-medium uppercase tracking-wide">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Button
            variant="ghost"
            className="bg-white !text-[#1e3a5f] hover:bg-gray-100 hover:!text-[#1e3a5f] font-semibold text-sm px-6 py-2 uppercase tracking-wide"
            asChild
          >
            <Link href="#upload">Start Order</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
