"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, TrendingUp, Award } from 'lucide-react';

const galleryDesigns = [
  {
    id: 1,
    title: 'Badge Design',
    image: '/generated/gallery-design-1.png',
    category: 'Vintage'
  },
  {
    id: 2,
    title: 'Floral Design',
    image: '/generated/gallery-design-2.png',
    category: 'Botanical'
  },
  {
    id: 3,
    title: 'Blueprint Design',
    image: '/generated/gallery-design-3.png',
    category: 'Technical'
  },
  {
    id: 4,
    title: 'Shield Design',
    image: '/generated/gallery-design-4.png',
    category: 'Athletic'
  }
];

const categories = ['Business Logos', 'Event T-Shirts', 'Sports Uniforms', 'Creative Artwork', 'Wedding Parties'];

export function DesignGallery() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container-custom relative z-10">
        {/* Section Header with decorative elements */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-navy-primary" />
            <span className="text-sm font-semibold text-navy-primary uppercase tracking-wider">Featured Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-navy-dark via-navy-primary to-navy-dark bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            DESIGN GALLERY
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of custom apparel designs. Get inspired by our previous work or create your own unique design.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
            <TrendingUp className="w-8 h-8 text-navy-primary mx-auto mb-2" />
            <div className="text-3xl font-black text-navy-primary mb-1">500+</div>
            <div className="text-sm text-gray-600 font-medium">Designs Created</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
            <Award className="w-8 h-8 text-navy-primary mx-auto mb-2" />
            <div className="text-3xl font-black text-navy-primary mb-1">98%</div>
            <div className="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-8 h-8 text-navy-primary mx-auto mb-2" />
            <div className="text-3xl font-black text-navy-primary mb-1">24hr</div>
            <div className="text-sm text-gray-600 font-medium">Turnaround Time</div>
          </div>
        </div>

        {/* Gallery Grid with enhanced styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {galleryDesigns.map((design, index) => (
            <div
              key={design.id}
              className="group relative bg-gradient-to-br from-black to-navy-dark rounded-2xl overflow-hidden aspect-square cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Design Image */}
              <div className="relative w-full h-full p-6 transform group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  className="object-contain p-4 drop-shadow-2xl"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-lg mb-1">{design.title}</h3>
                  <p className="text-white/90 text-sm uppercase tracking-wider font-semibold">{design.category}</p>
                </div>
              </div>

              {/* Animated border glow effect */}
              <div className="absolute inset-0 border-2 border-white/10 group-hover:border-white/30 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/50 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/50 rounded-br-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Categories Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 font-semibold mb-6 text-lg">Popular Categories:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-navy text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-navy hover:text-white shadow-md border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
