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
    <footer className="relative overflow-hidden bg-gradient-to-br from-navy-primary via-navy-dark to-black text-white">
      {/* Modern geometric background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h3 className="font-black text-2xl lg:text-3xl mb-4 text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  SHEVITA H<br />APPAREL
                </h3>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-sm">
                  Your partner in creating high-quality custom apparel. From concept to finished product, we make the process simple and professional.
                </p>
              </div>

              {/* Trust Badge */}
              <div className="inline-flex flex-col gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/20">
                <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Trusted by 500+ Customers</p>
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
            <div className="lg:col-span-2">
              <h4 className="font-bold text-sm lg:text-base mb-5 uppercase tracking-wider text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/80 hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm lg:text-base">
                    <ArrowUp className="w-3 h-3 rotate-90 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-white/80 hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm lg:text-base">
                    <ArrowUp className="w-3 h-3 rotate-90 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    <span>Design Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link href="#upload" className="text-white/80 hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm lg:text-base">
                    <ArrowUp className="w-3 h-3 rotate-90 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    <span>Upload Design</span>
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white/80 hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm lg:text-base">
                    <ArrowUp className="w-3 h-3 rotate-90 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-sm lg:text-base mb-5 uppercase tracking-wider text-white">Get In Touch</h4>
              <div className="space-y-4">
                <a href="mailto:custom@shevitaapparel.com" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group text-sm lg:text-base">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-white/70 group-hover:text-white mt-0.5 flex-shrink-0 transition-colors" />
                  <span className="break-all">custom@shevitaapparel.com</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group text-sm lg:text-base">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-white/70 group-hover:text-white flex-shrink-0 transition-colors" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <div className="flex items-start gap-3 text-white/80 text-sm lg:text-base">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-white/70 mt-0.5 flex-shrink-0" />
                  <span>123 Custom Lane<br />Design City, DC 12345</span>
                </div>
              </div>
            </div>

            {/* Social & Newsletter */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-sm lg:text-base mb-5 uppercase tracking-wider text-white">Stay Connected</h4>
              <p className="text-white/80 text-sm lg:text-base mb-5 leading-relaxed">
                Follow us for the latest designs and exclusive offers.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mb-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-navy-primary transition-all duration-300 border border-white/20 hover:border-white group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:text-navy-primary transition-colors" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-navy-primary transition-all duration-300 border border-white/20 hover:border-white group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-navy-primary transition-colors" />
                </a>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 group text-sm font-semibold"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-1 transition-transform" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Cleaner Design */}
        <div className="border-t border-white/20 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
            <p className="text-white/70 text-xs lg:text-sm text-center lg:text-left">
              © {currentYear} Shevita H Custom Apparel. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 text-xs lg:text-sm">
              <Link href="/privacy" className="text-white/70 hover:text-white transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/terms" className="text-white/70 hover:text-white transition-colors whitespace-nowrap">
                Terms of Service
              </Link>
              <span className="text-white/30">•</span>
              <span className="text-white/70 whitespace-nowrap">
                Made with care
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
