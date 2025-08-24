'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Gift } from 'lucide-react';
import { Button } from './button';

export function CharitySection() {
  return (
    <section id="charity" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-green/5 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Profit with Purpose
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            We donate <span className="font-bold text-primary-green">10% of every profit</span> to NGO work, 
            spreading smiles beyond the plate and making a difference in our community.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center max-w-6xl mx-auto">
          {/* Left Side - Food Service */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden w-full"
              >
                <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src="/Media/food1.png"
                    alt="Fresh homely meals"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-r from-primary-orange to-orange-600 text-white">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Nourishing Bodies</h3>
                  <p className="text-orange-100 text-sm sm:text-base">
                    Fresh, healthy meals delivered with love to your doorstep
                  </p>
                </div>
              </motion.div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-primary-yellow rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-lg"
              >
                <div className="text-lg sm:text-2xl font-bold text-gray-800">50,000+</div>
                <div className="text-xs sm:text-sm text-gray-600">Meals Served</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - NGO Work */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden w-full"
              >
                <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src="/Media/innocent.jpg"
                    alt="NGO charity work helping community"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-r from-primary-green to-green-600 text-white">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Feeding Souls</h3>
                  <p className="text-green-100 text-sm sm:text-base">
                    Supporting underprivileged communities through our NGO initiatives
                  </p>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-lg border-2 sm:border-4 border-primary-green/20"
              >
                <div className="text-lg sm:text-2xl font-bold text-primary-green">10%</div>
                <div className="text-xs sm:text-sm text-gray-600">Profit Donated</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16"
        >
          {[
            {
              icon: Heart,
              title: 'Lives Impacted',
              number: '5,000+',
              description: 'People helped through our NGO initiatives'
            },
            {
              icon: Users,
              title: 'Community Support',
              number: '25+',
              description: 'Local communities we actively support'
            },
            {
              icon: Gift,
              title: 'Total Donated',
              number: '₹2,50,000+',
              description: 'Amount contributed to social causes'
            }
          ].map((impact, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="text-center space-y-4 sm:space-y-6 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg w-full"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-primary-green to-green-600 rounded-full flex items-center justify-center">
                <impact.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl font-bold text-primary-green mb-2"
                >
                  {impact.number}
                </motion.div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                  {impact.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {impact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 space-y-4 sm:space-y-6 px-4"
        >
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Every Meal Makes a Difference
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            When you order from Muskurahat Food, you're not just feeding yourself – you're helping us feed those in need. 
            Join our mission of compassionate dining.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button className="bg-primary-green hover:bg-primary-green/90 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto">
              Learn More About Our NGO Work
            </Button>
            <Button className="bg-primary-orange hover:bg-primary-orange/90 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto">
              Order & Support
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}