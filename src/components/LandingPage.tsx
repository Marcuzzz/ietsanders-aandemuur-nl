
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import content from '../data/content.json';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 text-amber-700 font-medium text-sm tracking-wider uppercase">
                  <div className="w-8 h-0.5 bg-amber-700"></div>
                  <span>Kunstenaar & Schilder</span>
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
                  🎨 {content.title}
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                  Schilderijen van dieren en wildlife op authentieke oude vloerdelen
                </p>
              </div>
              
              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`mailto:${content.contact.email}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white font-medium rounded-none hover:bg-amber-800 transition-colors duration-300 shadow-sm"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Contact opnemen
                </a>
                <a
                  href={`tel:${content.contact.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 border border-amber-700 text-amber-700 font-medium rounded-none hover:bg-amber-700 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-3" />
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
      <section className="py-20 lg:py-28 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                Over de kunstenaar
              </h2>
              <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div 
                  className="text-lg text-gray-700 leading-relaxed space-y-6 font-light"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              </div>
              
              <div className="relative">
                <div className="relative overflow-hidden">
                  <img
                    src="/lovable-uploads/fe4c4d36-3042-4577-94c4-87e056b18e7b.png"
                    alt="Sander van der Linden artwork"
                    className="w-full rounded-none shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                Contact & Informatie
              </h2>
              <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="bg-white p-10 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-8">Contactgegevens</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{content.contact.name}</p>
                      <p className="text-gray-600 mt-1">{content.contact.address}</p>
                      <p className="text-gray-600">{content.contact.postcode} {content.contact.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-amber-700 flex-shrink-0" />
                    <a
                      href={`tel:${content.contact.phone}`}
                      className="text-gray-900 hover:text-amber-700 transition-colors font-light"
                    >
                      {content.contact.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-amber-700 flex-shrink-0" />
                    <a
                      href={`mailto:${content.contact.email}`}
                      className="text-gray-900 hover:text-amber-700 transition-colors font-light"
                    >
                      {content.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-10 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-8">Volg mij online</h3>
                <div className="space-y-4">
                  <a
                    href={content.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 py-3 hover:bg-gray-50 transition-colors group rounded-none"
                  >
                    <Facebook className="w-6 h-6 text-blue-600 group-hover:text-blue-700 flex-shrink-0" />
                    <span className="text-gray-900 group-hover:text-amber-700 font-light">Facebook</span>
                  </a>
                  
                  <a
                    href={content.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 py-3 hover:bg-gray-50 transition-colors group rounded-none"
                  >
                    <Instagram className="w-6 h-6 text-pink-600 group-hover:text-pink-700 flex-shrink-0" />
                    <span className="text-gray-900 group-hover:text-amber-700 font-light">Instagram</span>
                  </a>
                  
                  <a
                    href={content.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 py-3 hover:bg-gray-50 transition-colors group rounded-none"
                  >
                    <Linkedin className="w-6 h-6 text-blue-700 group-hover:text-blue-800 flex-shrink-0" />
                    <span className="text-gray-900 group-hover:text-amber-700 font-light">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 font-light">
            © 2024 {content.contact.name} - Alle rechten voorbehouden
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
