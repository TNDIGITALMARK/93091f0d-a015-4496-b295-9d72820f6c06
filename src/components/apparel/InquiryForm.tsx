"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

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
    <section id="contact" className="section-padding bg-gradient-to-br from-navy-primary via-navy-dark to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Let's Connect</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            GET IN TOUCH
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Have questions about bulk orders, custom designs, or special requirements? We're here to help bring your vision to life.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-start">
          {/* Left Side - Info with enhanced cards */}
          <div className="space-y-5 order-2 lg:order-1">
            {/* Email Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-7 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white mb-2 text-base lg:text-lg">Email</h3>
                  <a href="mailto:custom@shevitaapparel.com" className="text-white/90 hover:text-white transition-colors break-all">
                    custom@shevitaapparel.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-7 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-2 text-base lg:text-lg">Phone</h3>
                  <a href="tel:+15551234567" className="text-white/90 hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-7 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-2 text-base lg:text-lg">Address</h3>
                  <p className="text-white/90 leading-relaxed">123 Custom Lane, Design City, DC 12345</p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-7 border border-white/20">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-base lg:text-lg pt-3">Business Hours</h3>
              </div>
              <div className="pl-[4.5rem] space-y-3">
                <div className="flex justify-between items-center text-white/90 text-sm lg:text-base">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-white/90 text-sm lg:text-base">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-white/90 text-sm lg:text-base">
                  <span>Sunday</span>
                  <span className="font-semibold text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form with enhanced styling */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-white/30 shadow-2xl order-1 lg:order-2">
            {submitted ? (
              <div className="text-center py-12 lg:py-16">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">Message Sent!</h3>
                <p className="text-white/90 text-base lg:text-lg">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-white font-bold text-xs lg:text-sm uppercase tracking-wider">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-white/90 text-black border-2 border-white/40 focus:border-white focus-visible:ring-white h-12 lg:h-14 text-base rounded-xl placeholder:text-gray-500 transition-all duration-300 hover:bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-bold text-xs lg:text-sm uppercase tracking-wider">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/90 text-black border-2 border-white/40 focus:border-white focus-visible:ring-white h-12 lg:h-14 text-base rounded-xl placeholder:text-gray-500 transition-all duration-300 hover:bg-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-white font-bold text-xs lg:text-sm uppercase tracking-wider">
                    Phone Number <span className="text-white/60 text-xs normal-case font-normal">(Optional)</span>
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="bg-white/90 text-black border-2 border-white/40 focus:border-white focus-visible:ring-white h-12 lg:h-14 text-base rounded-xl placeholder:text-gray-500 transition-all duration-300 hover:bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-bold text-xs lg:text-sm uppercase tracking-wider">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/90 text-black border-2 border-white/40 focus:border-white focus-visible:ring-white min-h-32 lg:min-h-36 text-base rounded-xl placeholder:text-gray-500 transition-all duration-300 hover:bg-white resize-none"
                    placeholder="Tell us about your project, quantity needed, design details..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-navy-primary hover:bg-gray-100 hover:scale-[1.02] font-black text-sm lg:text-base py-6 lg:py-7 uppercase tracking-wider shadow-2xl transform transition-all duration-300 rounded-xl"
                >
                  Send Message
                </Button>

                <p className="text-white/70 text-xs text-center pt-2">
                  We typically respond within 24 hours on business days
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
