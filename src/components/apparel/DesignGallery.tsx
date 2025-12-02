"use client";

import React from 'react';
import Image from 'next/image';

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

export function DesignGallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            DESIGN GALLERY
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of custom apparel designs. Get inspired by our previous work or create your own unique design.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {galleryDesigns.map((design) => (
            <div
              key={design.id}
              className="group relative bg-black rounded-lg overflow-hidden aspect-square cursor-pointer transition-transform duration-300 hover:scale-105 shadow hover:shadow-lg"
            >
              {/* Design Image */}
              <div className="relative w-full h-full p-4">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  className="object-contain p-4"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Overlay with title on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg mb-1">{design.title}</h3>
                  <p className="text-white/80 text-sm uppercase tracking-wider">{design.category}</p>
                </div>
              </div>

              {/* White border frame effect */}
              <div className="absolute inset-0 border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Popular Categories:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Business Logos', 'Event T-Shirts', 'Sports Uniforms', 'Creative Artwork', 'Wedding Parties'].map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-gray-100 hover:bg-navy hover:text-white transition-colors duration-300 rounded text-sm font-medium cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
