"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function InquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-navy text-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div>
            <h2 className="text-4xl font-black mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              GET IN TOUCH
            </h2>

            <p className="text-lg text-white/80 mb-8">
              Have questions about bulk orders, custom designs, or special requirements? We're here to help bring your vision to life.
            </p>

            <div className="space-y-4 text-white/80">
              <div>
                <h3 className="font-bold text-white mb-2 text-lg">Email:</h3>
                <p>custom@shevitaapparel.com</p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2 text-lg">Phone:</h3>
                <p>+1 (555) 123-4567</p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2 text-lg">Address:</h3>
                <p>123 Custom Lane, Design City, DC 12345</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h3 className="font-bold text-white mb-4 text-lg">Business Hours:</h3>
              <ul className="text-white/80 space-y-2">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/80">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-white font-semibold mb-2 block">
                    FULL NAME
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-white text-black border-white/40 focus:border-white h-12"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white font-semibold mb-2 block">
                    EMAIL ADDRESS
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white text-black border-white/40 focus:border-white h-12"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phoneNumber" className="text-white font-semibold mb-2 block">
                    PHONE NUMBER
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="bg-white text-black border-white/40 focus:border-white h-12"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white font-semibold mb-2 block">
                    MESSAGE
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white text-black border-white/40 focus:border-white min-h-32"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-navy-primary hover:bg-gray-100 font-bold text-base py-6 uppercase tracking-wider shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
