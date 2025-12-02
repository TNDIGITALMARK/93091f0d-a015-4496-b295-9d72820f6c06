"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative bg-navy text-white pt-24 pb-20 overflow-hidden">
      {/* Background overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>

      {/* Hero background - placeholder for diverse people in custom apparel */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#1e3a5f] via-[#2d4a6f] to-[#1e3a5f]"></div>
        {/* Placeholder for hero image - would show diverse people wearing custom apparel */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="grid grid-cols-7 gap-4 w-full h-full p-8">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="bg-white/10 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            UNLEASH YOUR CREATIVITY.
            <br />
            <span className="text-white/95">CUSTOM APPAREL, MADE EASY.</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-2xl mx-auto">
            Transform your ideas into high-quality custom shirts and apparel. Professional results, simplified process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-navy-primary hover:bg-gray-100 font-bold text-base px-8 py-6 uppercase tracking-wider shadow-lg"
              asChild
            >
              <Link href="#gallery">View Designs</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-base px-8 py-6 uppercase tracking-wider"
              asChild
            >
              <Link href="#upload">Upload Your Design</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
