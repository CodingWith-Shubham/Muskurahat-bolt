'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Truck, Clock, Shield, Star, ArrowRight } from 'lucide-react';
import { Button } from './button';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.1)_1px,transparent_0)] bg-[size:20px_20px]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-emerald-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 left-10 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-orange-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-yellow-200/30 to-yellow-400/20 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 lg:space-y-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium border border-emerald-200"
            >
              <Star className="w-4 h-4 fill-current" />
              #1 Home-Style Food Delivery
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tight"
              >
                Muskurahat
                <span className="block text-emerald-600">
                  Food Services
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-2"
              >
                <p className="text-2xl sm:text-3xl text-emerald-600 font-semibold italic">
                  Ghar ka Swad Har Roz
                </p>
                <p className="text-lg sm:text-xl text-slate-600 max-w-lg leading-relaxed">
                  Experience the warmth of home-cooked meals, delivered fresh to your doorstep with love and care.
                </p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Order Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Explore Menu
              </Button>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="pt-8"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Heart, label: 'Made with Love', color: 'from-red-400 to-red-500', bg: 'bg-red-50', text: 'text-red-600' },
                  { icon: Shield, label: 'Pure & Healthy', color: 'from-emerald-400 to-emerald-500', bg: 'bg-emerald-50', text: 'text-emerald-600' },
                  { icon: Clock, label: 'On-Time Delivery', color: 'from-blue-400 to-blue-500', bg: 'bg-blue-50', text: 'text-blue-600' },
                  { icon: Truck, label: 'Fast Service', color: 'from-orange-400 to-orange-500', bg: 'bg-orange-50', text: 'text-orange-600' },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                    className="group text-center space-y-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-14 h-14 mx-auto ${feature.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center`}>
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className={`text-sm font-semibold ${feature.text} group-hover:text-slate-800 transition-colors`}>
                      {feature.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:pl-8"
          >
            {/* Main Image Card */}
            <div className="relative z-20">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                    alt="Happy family enjoying homely meal"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Image Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <h3 className="font-serif text-xl lg:text-2xl font-bold mb-2">
                      Fresh & Nutritious Meals
                    </h3>
                    <p className="text-white/90 text-sm lg:text-base">
                      Crafted with premium ingredients, delivered with care
                    </p>
                  </motion.div>
                </div>

                {/* Floating Rating Badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6, type: "spring" }}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-slate-800">4.9</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-300/30 to-yellow-500/20 rounded-full blur-sm z-10"
            />
            
            <motion.div
              animate={{ 
                y: [0, -25, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-emerald-300/25 to-emerald-500/15 rounded-full blur-md z-10"
            />

            {/* Small Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 z-30 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Delivery Time</p>
                  <p className="text-lg font-bold text-slate-800">30 mins</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}