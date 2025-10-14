'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Heart, Target, Users } from 'lucide-react';

export function FounderVision() {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-green-50 via-white to-primary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Founder's Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A message from our founder about the mission and vision behind Muskurahat Food Services
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Founder Image and Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <img
                  src="/Media/pankajfounder.jpg"
                  alt="Pankaj Dhondiyal - Founder"
                  className="w-full h-96 object-cover object-center"
                  style={{ aspectRatio: '3/4' }}
                />
                <div className="p-8 bg-gradient-to-r from-primary-green to-green-600 text-white">
                  <h3 className="font-serif text-2xl font-semibold mb-2">Pankaj Dhondiyal</h3>
                  <p className="text-green-100 mb-1">MBA, Founder & Visionary</p>
                  <p className="text-green-100 text-sm">Muskurahat Food Services</p>
                </div>
              </motion.div>
              
              {/* Floating Quote Icon */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center shadow-lg"
              >
                <Quote className="w-8 h-8 text-gray-800" />
              </motion.div>
            </div>

            {/* Mission Values */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Heart, label: 'Compassion', color: 'text-red-500' },
                { icon: Target, label: 'Purpose', color: 'text-blue-500' },
                { icon: Users, label: 'Community', color: 'text-primary-green' }
              ].map((value, index) => (
                <motion.div
                  key={value.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white rounded-xl shadow-md"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gray-50 rounded-full flex items-center justify-center">
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{value.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Vision Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quote Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
              <div className="absolute top-6 left-6 w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-primary-green" />
              </div>
              
              <div className="pt-8 space-y-6">
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed italic"
                >
                 "We are a self-funded group of friends driven by compassion and purpose. Our initiative, Share for Charity, focuses on supporting communities in need while collaborating with major NGOs like Nirmala Sewa Trust and others to create a lasting social impact."
                </motion.blockquote>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed italic"
                >
                  "With every meal we serve, we deliver purity on the plate and smiles in the heart. 
                  Our vision is simple – <span className="font-bold text-primary-green">Food with Purpose, Profit with Charity</span>."
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="pt-6 border-t border-gray-100"
                >
                  <p className="font-semibold text-gray-800 text-right">
                    – Pankaj Dhondiyal, MBA
                  </p>
                  <p className="text-gray-600 text-right text-sm">
                    Founder, Muskurahat Food Services
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Vision Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  title: 'Clean & Pure Meals',
                  description: 'Healthy food for nourishing bodies'
                },
                {
                  title: 'Social Impact',
                  description: 'Supporting society with every meal'
                },
                {
                  title: 'Compassionate Business',
                  description: 'Prosperity built on helping others'
                },
                {
                  title: 'Smiles & Hearts',
                  description: 'Bringing joy through food'
                }
              ].map((point, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary-green"
                >
                  <h4 className="font-semibold text-gray-800 mb-2">{point.title}</h4>
                  <p className="text-sm text-gray-600">{point.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}