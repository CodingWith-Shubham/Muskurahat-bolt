'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Gift } from 'lucide-react';
import { Button } from './button';

export function CharitySection() {
  return (
    <section id="charity" className="py-20 bg-gradient-to-br from-primary-green/5 via-white to-green-50">
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
            Profit with Purpose
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We donate <span className="font-bold text-primary-green">10% of every profit</span> to NGO work, 
            spreading smiles beyond the plate and making a difference in our community.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Food Service */}
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
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                  alt="Fresh homely meals"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 bg-gradient-to-r from-primary-orange to-orange-600 text-white">
                  <h3 className="font-serif text-2xl font-semibold mb-3">Nourishing Bodies</h3>
                  <p className="text-orange-100">
                    Fresh, healthy meals delivered with love to your doorstep
                  </p>
                </div>
              </motion.div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-primary-yellow rounded-2xl p-4 text-center shadow-lg"
              >
                <div className="text-2xl font-bold text-gray-800">50,000+</div>
                <div className="text-sm text-gray-600">Meals Served</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - NGO Work */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
                  alt="NGO charity work helping community"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 bg-gradient-to-r from-primary-green to-green-600 text-white">
                  <h3 className="font-serif text-2xl font-semibold mb-3">Feeding Souls</h3>
                  <p className="text-green-100">
                    Supporting underprivileged communities through our NGO initiatives
                  </p>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 text-center shadow-lg border-4 border-primary-green/20"
              >
                <div className="text-2xl font-bold text-primary-green">10%</div>
                <div className="text-sm text-gray-600">Profit Donated</div>
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
          className="grid md:grid-cols-3 gap-8 mt-16 pt-16"
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
              className="text-center space-y-6 bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary-green to-green-600 rounded-full flex items-center justify-center">
                <impact.icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-primary-green mb-2"
                >
                  {impact.number}
                </motion.div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                  {impact.title}
                </h3>
                <p className="text-gray-600">
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
          className="text-center mt-16 space-y-6"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gray-800">
            Every Meal Makes a Difference
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            When you order from Muskurahat Food, you're not just feeding yourself – you're helping us feed those in need. 
            Join our mission of compassionate dining.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-3 rounded-full text-lg">
              Learn More About Our NGO Work
            </Button>
            <Button className="bg-primary-orange hover:bg-primary-orange/90 text-white px-8 py-3 rounded-full text-lg">
              Order & Support
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}