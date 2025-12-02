"use client";

import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-navy-dark via-black to-navy-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 lg:mb-12">
          {/* Company Info - spans 2 columns on large screens */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <h3 className="font-black text-xl lg:text-2xl mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              SHEVITA H APPAREL
            </h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Your partner in creating high-quality custom apparel. From concept to finished product, we make the process simple and professional.
            </p>
            <div className="pt-2">
              <p className="text-white/60 text-xs mb-2">Trusted by 500+ satisfied customers</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h4 className="font-bold text-base lg:text-lg mb-5 lg:mb-6 uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Design Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="#upload" className="hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Upload Design</span>
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white transition-colors"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1">
            <h4 className="font-bold text-base lg:text-lg mb-5 lg:mb-6 uppercase tracking-wider text-white">Contact</h4>
            <div className="space-y-4 text-white/80 text-sm">
              <a href="mailto:custom@shevitaapparel.com" className="flex items-start gap-3 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-white/60 group-hover:text-white mt-0.5 flex-shrink-0 transition-colors" />
                <span className="break-all">custom@shevitaapparel.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-white/60 group-hover:text-white flex-shrink-0 transition-colors" />
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <span>123 Custom Lane<br />Design City, DC 12345</span>
              </div>
            </div>
          </div>

          {/* Social & Connect */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-base lg:text-lg mb-5 lg:mb-6 uppercase tracking-wider text-white">Follow Us</h4>
            <p className="text-white/70 text-sm mb-5 leading-relaxed">
              Stay updated with our latest designs and special offers.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 text-white/60 text-sm">
            <p className="text-center lg:text-left">
              © {currentYear} Shevita H Custom Apparel. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <span className="hidden sm:inline text-white/30">•</span>
              <Link href="/terms" className="hover:text-white transition-colors whitespace-nowrap">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 lg:w-5 lg:h-5 text-white/90 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
