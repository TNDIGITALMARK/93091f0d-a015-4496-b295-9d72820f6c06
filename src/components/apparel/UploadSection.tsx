"use client";

import React, { useState } from 'react';
import { Upload, FileText, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const acceptedFormats = [
  { name: 'PNG', color: 'bg-blue-500' },
  { name: 'JPG', color: 'bg-green-500' },
  { name: 'EPS', color: 'bg-purple-500' },
  { name: 'PDF', color: 'bg-red-500' },
  { name: 'AI', color: 'bg-orange-500' }
];

export function UploadSection() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0].name);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  return (
    <section id="upload" className="section-padding bg-gradient-to-br from-navy-dark via-navy-primary to-navy-dark text-white relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header with enhanced styling */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Upload className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Easy Upload Process</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            UPLOAD YOUR DESIGN
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Have your own design ready? Upload it here and see instant previews on different apparel styles. We accept multiple file formats.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Upload Zone */}
          <div className="space-y-6">
            {/* Drag and Drop Area with enhanced design */}
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-500 backdrop-blur-sm ${
                dragActive
                  ? 'border-white bg-white/20 scale-105 shadow-2xl'
                  : 'border-white/40 hover:border-white/70 hover:bg-white/10 bg-white/5'
              }`}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                dragActive ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              </div>

              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".png,.jpg,.jpeg,.eps,.pdf,.ai"
                onChange={handleChange}
              />

              <label htmlFor="file-upload" className="cursor-pointer block relative z-10">
                <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <Upload className="w-10 h-10 text-white" />
                  </div>
                </div>

                {uploadedFile ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-bold text-lg">{uploadedFile}</p>
                    </div>
                    <p className="text-white/80 text-sm">File uploaded successfully!</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-2 text-white">Drag & Drop Files Here</h3>
                    <p className="text-white/80 mb-6 text-lg">or click to browse</p>
                  </>
                )}

                <Button
                  type="button"
                  variant="secondary"
                  className="mt-6 bg-white text-navy-primary hover:bg-gray-100 hover:scale-105 font-bold uppercase text-base px-8 py-6 shadow-lg transform transition-all duration-300"
                >
                  {uploadedFile ? 'Change File' : 'Browse Files'}
                </Button>
              </label>
            </div>

            {/* Accepted Formats with enhanced styling */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white font-semibold text-sm mb-4 text-center uppercase tracking-wider">Accepted File Formats:</p>
              <div className="flex justify-center gap-3 flex-wrap">
                {acceptedFormats.map((format) => (
                  <div
                    key={format.name}
                    className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/30 font-bold text-sm backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    {format.name}
                  </div>
                ))}
              </div>
              {/* File Size Limit */}
              <p className="text-white/70 text-sm text-center mt-4">
                Max file size: <span className="font-semibold text-white">10MB</span>
              </p>
            </div>
          </div>

          {/* T-Shirt Mockups Preview with enhanced design */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* White T-Shirt Preview */}
              <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <div className="relative w-full aspect-[4/5] mb-4">
                  <Image
                    src="/images/mockups/tshirt-front.svg"
                    alt="White T-Shirt Preview"
                    fill
                    className="object-contain text-gray-400"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {uploadedFile ? (
                      <div className="bg-navy/10 rounded-xl px-4 py-3 backdrop-blur-sm animate-pulse">
                        <FileText className="w-10 h-10 text-navy-primary" />
                      </div>
                    ) : (
                      <div className="bg-gray-100 rounded-xl px-4 py-3">
                        <p className="text-gray-500 text-xs text-center font-medium">
                          Preview on white
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-center text-sm font-bold text-gray-800 uppercase tracking-wide">White Tee</p>
              </div>

              {/* Black T-Shirt Preview */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20">
                <div className="relative w-full aspect-[4/5] mb-4">
                  <Image
                    src="/images/mockups/tshirt-front.svg"
                    alt="Black T-Shirt Preview"
                    fill
                    className="object-contain text-white/60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {uploadedFile ? (
                      <div className="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm animate-pulse border border-white/30">
                        <FileText className="w-10 h-10 text-white" />
                      </div>
                    ) : (
                      <div className="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                        <p className="text-white/80 text-xs text-center font-medium">
                          Preview on black
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-center text-sm font-bold text-white uppercase tracking-wide">Black Tee</p>
              </div>
            </div>

            {/* Pricing Info with enhanced styling */}
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <h4 className="font-black text-white text-lg uppercase tracking-wide">Instant Quote:</h4>
              </div>
              <ul className="text-sm text-white/90 space-y-3">
                <li className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span>Single custom t-shirt:</span>
                  <span className="font-bold text-white text-lg">$12</span>
                </li>
                <li className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span>Bulk order (25+ shirts):</span>
                  <span className="font-bold text-white text-lg">$8 each</span>
                </li>
                <li className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span>Rush delivery:</span>
                  <span className="font-bold text-white text-lg">+$5</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
