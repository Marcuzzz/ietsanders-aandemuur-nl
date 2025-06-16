
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import content from '../data/content.json';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-amber-700 font-medium">
                  <div className="w-8 h-1 bg-amber-700"></div>
                  <span>Kunstenaar & Schilder</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  🎨 {content.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Schilderijen van dieren en wildlife op authentieke oude vloerdelen
                </p>
              </div>
              
              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${content.contact.email}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors duration-200 shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact opnemen
                </a>
                <a
                  href={`tel:${content.contact.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-700 text-amber-700 font-semibold rounded-lg hover:bg-amber-700 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bellen
                </a>
              </div>
            </div>

            {/* Right Column - Image Carousel */}
            <div className="relative">
              <ImageCarousel images={content.images} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Over de kunstenaar
              </h2>
              <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div 
                  className="text-lg text-gray-700 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              </div>
              
              <div className="relative">
                <img
                  src="/lovable-uploads/fe4c4d36-3042-4577-94c4-87e056b18e7b.png"
                  alt="Sander van der Linden artwork"
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Contact & Informatie
              </h2>
              <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactgegevens</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-amber-700" />
                    <div>
                      <p className="font-semibold text-gray-900">{content.contact.name}</p>
                      <p className="text-gray-600">{content.contact.address}</p>
                      <p className="text-gray-600">{content.contact.postcode} {content.contact.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-700" />
                    <a
                      href={`tel:${content.contact.phone}`}
                      className="text-gray-900 hover:text-amber-700 transition-colors"
                    >
                      {content.contact.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-amber-700" />
                    <a
                      href={`mailto:${content.contact.email}`}
                      className="text-gray-900 hover:text-amber-700 transition-colors"
                    >
                      {content.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Volg mij online</h3>
                <div className="space-y-4">
                  <a
                    href={content.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-50 transition-colors group"
                  >
                    <Facebook className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                    <span className="text-gray-900 group-hover:text-amber-700">Facebook</span>
                  </a>
                  
                  <a
                    href={content.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-50 transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-pink-600 group-hover:text-pink-700" />
                    <span className="text-gray-900 group-hover:text-amber-700">Instagram</span>
                  </a>
                  
                  <a
                    href={content.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-50 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-blue-700 group-hover:text-blue-800" />
                    <span className="text-gray-900 group-hover:text-amber-700">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 {content.contact.name} - Alle rechten voorbehouden
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
