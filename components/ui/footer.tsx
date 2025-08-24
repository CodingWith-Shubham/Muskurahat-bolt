'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#charity', label: 'Charity' },
    { href: '#contact', label: 'Contact' },
    { href: '#vision', label: "Founder's Vision" },
    { href: '#team', label: 'Our Team' }
  ];

  const services = [
    'Veg Thali',
    'Special Meals',
    'Tiffin Service',
    'Family Packs',
    'Breakfast Special',
    'Seasonal Delights'
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Muskurahat Food</h3>
                <p className="text-sm text-gray-400">Ghar ka Swad Har Roz</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Delivering food that feels like home – pure, healthy, and filled with love. 
              Every meal makes a difference in someone's life.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: MessageCircle, href: '#', label: 'WhatsApp' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-green rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-green transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 py-1">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-green flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">+91 98765 43210</p>
                  <p className="text-gray-400 text-sm">+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-green flex-shrink-0" />
                <p className="text-gray-400 text-sm">info@muskurahatfood.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-green flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">123 Food Street</p>
                  <p className="text-gray-400 text-sm">Green Valley, Delhi - 110001</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 Muskurahat Food Services. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with ❤️ for healthier communities
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-green transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-green transition-colors">
              Refund Policy
            </a>
          </div>
        </motion.div>

        {/* Floating Action Button for Mobile */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 lg:hidden"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-14 h-14 bg-primary-orange hover:bg-primary-orange/90 rounded-full shadow-lg flex items-center justify-center text-white"
          >
            <Phone className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}