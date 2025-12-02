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
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Modern decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-28">
        {/* Modern Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-navy-primary/10 to-purple-600/10 rounded-full mb-6 border border-navy-primary/20">
            <MessageCircle className="w-4 h-4 text-navy-primary" />
            <span className="text-sm font-bold uppercase tracking-wider text-navy-primary">Let's Connect</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-navy-primary tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            GET IN TOUCH
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Have questions about bulk orders, custom designs, or special requirements? We're here to help bring your vision to life.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Side - Contact Info Cards */}
            <div className="lg:col-span-2 space-y-5">
              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-navy-primary/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-primary to-navy-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-navy-primary mb-1.5 text-sm uppercase tracking-wide">Email</h3>
                    <a href="mailto:custom@shevitaapparel.com" className="text-gray-700 hover:text-navy-primary transition-colors break-all text-sm font-medium">
                      custom@shevitaapparel.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-navy-primary/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-primary to-navy-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-primary mb-1.5 text-sm uppercase tracking-wide">Phone</h3>
                    <a href="tel:+15551234567" className="text-gray-700 hover:text-navy-primary transition-colors text-sm font-medium">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-navy-primary/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-primary to-navy-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-primary mb-1.5 text-sm uppercase tracking-wide">Address</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">123 Custom Lane, Design City, DC 12345</p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-gradient-to-br from-navy-primary to-navy-dark rounded-2xl p-6 shadow-xl border border-navy-primary/20 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">Business Hours</h3>
                </div>
                <div className="space-y-3 ml-1">
                  <div className="flex justify-between items-center text-white/90 text-sm">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="font-bold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-white/90 text-sm">
                    <span className="font-medium">Saturday</span>
                    <span className="font-bold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-white/90 text-sm">
                    <span className="font-medium">Sunday</span>
                    <span className="font-bold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-200">
                {submitted ? (
                  <div className="text-center py-12 lg:py-16">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-navy-primary mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-navy-primary font-bold text-xs uppercase tracking-wider">
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="bg-gray-50 text-gray-900 border-2 border-gray-200 focus:border-navy-primary focus-visible:ring-navy-primary h-12 lg:h-14 text-base rounded-xl placeholder:text-gray-400 transition-all duration-300 hover:border-gray-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-navy-primary font-bold text-xs uppercase tracking-wider">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 text-gray-900 border-2 border-gray-200 focus:border-navy-primary focus-visible:ring-navy-primary h-12 lg:h-14 text-base rounded-xl placeholder:text-gray-400 transition-all duration-300 hover:border-gray-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber" className="text-navy-primary font-bold text-xs uppercase tracking-wider">
                        Phone Number <span className="text-gray-500 text-xs normal-case font-normal">(Optional)</span>
                      </Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="bg-gray-50 text-gray-900 border-2 border-gray-200 focus:border-navy-primary focus-visible:ring-navy-primary h-12 lg:h-14 text-base rounded-xl placeholder:text-gray-400 transition-all duration-300 hover:border-gray-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-navy-primary font-bold text-xs uppercase tracking-wider">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-gray-50 text-gray-900 border-2 border-gray-200 focus:border-navy-primary focus-visible:ring-navy-primary min-h-36 lg:min-h-40 text-base rounded-xl placeholder:text-gray-400 transition-all duration-300 hover:border-gray-300 resize-none"
                        placeholder="Tell us about your project, quantity needed, design details..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-navy-primary to-navy-dark text-white hover:from-navy-dark hover:to-navy-primary font-black text-sm lg:text-base py-6 lg:py-7 uppercase tracking-wider shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 rounded-xl"
                    >
                      Send Message
                    </Button>

                    <p className="text-gray-500 text-xs text-center pt-2">
                      We typically respond within 24 hours on business days
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
