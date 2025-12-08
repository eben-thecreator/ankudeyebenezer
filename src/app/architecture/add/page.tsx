'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AddArchitectureProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    image: '',
    type: 'Residential',
    year: new Date().getFullYear(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'year' ? parseInt(value) : value,
    }));

    // Auto-generate slug from title
    if (name === 'title') {
      const generatedSlug = value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
      setFormData((prev) => ({
        ...prev,
        slug: generatedSlug,
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPreview(result);
        setFormData((prev) => ({
          ...prev,
          image: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.title || !formData.slug || !formData.type || !formData.year) {
        throw new Error('Please fill in all required fields');
      }

      // Here you would typically send the data to an API endpoint
      // For now, this is a placeholder for the form submission logic
      const response = await fetch('/api/architecture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      // Redirect to architecture page on success
      router.push('/architecture');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const projectTypes = ['Residential', 'Commercial', 'Civic', 'Mixed-Use', 'Institutional', 'Industrial', 'Landscape', 'Urban Planning'];

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Header */}
      <section className="relative w-full h-64 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        <div className="relative z-10 h-full flex flex-col items-start justify-end px-6 sm:px-12 pb-12">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-3">ADD PROJECT</h1>
          <p className="text-lg text-gray-300">Add a new architecture project to the portfolio</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full py-16 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-sm">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-2">
                Project Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter project title"
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            {/* Slug (Auto-generated) */}
            <div>
              <label htmlFor="slug" className="block text-sm font-semibold text-gray-900 mb-2">
                Slug (Auto-generated) *
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="slug-format"
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500 mt-2">Auto-generated from title. Can be edited manually.</p>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter project description"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-sm font-semibold text-gray-900 mb-2">
                Project Image *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-sm p-6 text-center">
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  required={!preview}
                />
                <label htmlFor="image" className="cursor-pointer">
                  {preview ? (
                    <div className="relative w-full h-64">
                      <Image
                        src={preview}
                        alt="Preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-600 font-medium">Drag and drop your image here</p>
                      <p className="text-gray-500 text-sm mt-1">or click to select a file</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Type (Development Type) */}
            <div>
              <label htmlFor="type" className="block text-sm font-semibold text-gray-900 mb-2">
                Type of Development *
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              >
                <option value="">Select a type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div>
              <label htmlFor="year" className="block text-sm font-semibold text-gray-900 mb-2">
                Year of Development *
              </label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                min="1900"
                max={new Date().getFullYear()}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-8">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-black text-white font-semibold rounded-sm hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
              >
                {loading ? 'Creating Project...' : 'Create Project'}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-900 font-semibold rounded-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
