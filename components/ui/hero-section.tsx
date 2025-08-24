'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Truck, Clock, Shield } from 'lucide-react';
import { Button } from './button';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-primary-background via-white to-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-serif text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              >
                Muskurahat Food Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl text-primary-green font-medium"
              >
                Ghar ka Swad Har Roz
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-600 max-w-lg"
              >
                We deliver food that feels like home – pure, healthy, and filled with love.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-primary-orange hover:bg-primary-orange/90 text-white px-8 py-3 rounded-full text-lg">
                Order Now
              </Button>
              <Button variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-8 py-3 rounded-full text-lg">
                Explore Menu
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {[
                { icon: Heart, label: 'Made with Love', color: 'text-red-500' },
                { icon: Shield, label: 'Pure & Healthy', color: 'text-primary-green' },
                { icon: Clock, label: 'On-Time Delivery', color: 'text-blue-500' },
                { icon: Truck, label: 'Fast Service', color: 'text-primary-orange' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-2"
                >
                  <div className="w-12 h-12 mx-auto bg-white rounded-full shadow-md flex items-center justify-center">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{feature.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                  alt="Happy family enjoying homely meal"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 bg-gradient-to-r from-primary-green to-green-600 text-white">
                  <h3 className="font-serif text-xl font-semibold mb-2">Fresh & Healthy Meals</h3>
                  <p className="text-green-100">Delivered with care to your doorstep</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary-yellow rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-orange rounded-full opacity-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}