"use client";

import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              APPAREL CUSTOMS
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Your partner in creating high-quality custom apparel. From concept to finished product, we make the process simple and professional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white transition-colors">
                  Design Gallery
                </Link>
              </li>
              <li>
                <Link href="#upload" className="hover:text-white transition-colors">
                  Upload Design
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-3 text-white/70 text-sm mb-4">
              <p>Email: custom@shevitaapparel.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Custom Lane<br />Design City, DC 12345</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
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
            <p>© {currentYear} Apparel Customs. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
