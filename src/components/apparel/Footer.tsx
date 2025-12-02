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

      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-black text-2xl mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              SHEVITA H APPAREL
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Your partner in creating high-quality custom apparel. From concept to finished product, we make the process simple and professional.
            </p>
            <div className="pt-4">
              <p className="text-white/60 text-xs mb-2">Trusted by 500+ satisfied customers</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>
                <Link href="/" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  Design Gallery
                </Link>
              </li>
              <li>
                <Link href="#upload" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  Upload Design
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Connect With Us</h4>
            <div className="space-y-3 text-white/80 text-sm mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/60" />
                <p>custom@shevitaapparel.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/60" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/60 mt-1 flex-shrink-0" />
                <p>123 Custom Lane<br />Design City, DC 12345</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© {currentYear} Shevita H Custom Apparel. All rights reserved.</p>

            <div className="flex gap-6 items-center">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="ml-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
