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
    <section id="upload" className="section-padding bg-navy text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            UPLOAD YOUR DESIGN
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have your own design ready? Upload it here and see instant previews on different apparel styles. We accept multiple file formats.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Upload Zone */}
          <div>
            {/* Drag and Drop Area */}
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                dragActive
                  ? 'border-white bg-white/10 scale-105'
                  : 'border-white/40 hover:border-white/60 hover:bg-white/5'
              }`}
            >
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".png,.jpg,.jpeg,.eps,.pdf,.ai"
                onChange={handleChange}
              />

              <label htmlFor="file-upload" className="cursor-pointer block">
                <Upload className="w-16 h-16 mx-auto mb-4 text-white/60" />

                {uploadedFile ? (
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Check className="w-6 h-6 text-green-400" />
                    <p className="text-white font-semibold">{uploadedFile}</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-2">Drag & Drop Files Here</h3>
                    <p className="text-white/70 mb-4">or browse</p>
                  </>
                )}

                <Button
                  type="button"
                  variant="secondary"
                  className="mt-4 bg-white text-navy-primary hover:bg-gray-100 font-semibold uppercase"
                >
                  {uploadedFile ? 'Change File' : 'Browse Files'}
                </Button>
              </label>
            </div>

            {/* Accepted Formats */}
            <div className="mt-6">
              <p className="text-white/70 text-sm mb-3 text-center">Accepted File Formats:</p>
              <div className="flex justify-center gap-3 flex-wrap">
                {acceptedFormats.map((format) => (
                  <div
                    key={format.name}
                    className="px-4 py-2 bg-white/10 rounded border border-white/30 font-medium text-sm"
                  >
                    {format.name}
                  </div>
                ))}
              </div>
            </div>

            {/* File Size Limit */}
            <p className="text-white/60 text-sm text-center mt-4">
              Max file size: 10MB
            </p>
          </div>

          {/* T-Shirt Mockups Preview */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {/* White T-Shirt Preview */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/images/mockups/tshirt-front.svg"
                    alt="White T-Shirt Preview"
                    fill
                    className="object-contain text-gray-400"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {uploadedFile ? (
                      <div className="bg-navy/10 rounded px-3 py-2">
                        <FileText className="w-8 h-8 text-navy-primary" />
                      </div>
                    ) : (
                      <p className="text-gray-400 text-xs text-center px-4">
                        Your design preview
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-center mt-3 text-sm font-medium text-gray-700">White Tee</p>
              </div>

              {/* Black T-Shirt Preview */}
              <div className="bg-black rounded-lg p-6 shadow-lg border border-white/20">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/images/mockups/tshirt-front.svg"
                    alt="Black T-Shirt Preview"
                    fill
                    className="object-contain text-white/60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {uploadedFile ? (
                      <div className="bg-white/10 rounded px-3 py-2">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                    ) : (
                      <p className="text-white/60 text-xs text-center px-4">
                        Your design preview
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-center mt-3 text-sm font-medium text-white">Black Tee</p>
              </div>
            </div>

            {/* Pricing Info */}
            <div className="mt-6 bg-white/10 rounded-lg p-4 border border-white/20">
              <h4 className="font-bold mb-2 text-white">Instant Quote:</h4>
              <ul className="text-sm text-white/80 space-y-1">
                <li>• Single custom t-shirt: <span className="font-semibold text-white">$12</span></li>
                <li>• Bulk order (25+ shirts): <span className="font-semibold text-white">$8 each</span></li>
                <li>• Rush delivery: <span className="font-semibold text-white">+$5</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
