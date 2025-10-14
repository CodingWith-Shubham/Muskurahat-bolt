'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from './card';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Pankaj Dhondiyal',
      role: 'Founder & CEO',
      image: '/Media/pankajfounder.jpg',
      quote: 'Leading with compassion and vision for a healthier, more caring world through food.'
    },
    {
      name: 'Amit Sundriyal',
      role: 'Co-Founder',
      image: '/Media/amit.jpg',
      quote: 'Passionate about bringing authentic flavors and building sustainable food systems.'
    },
    {
      name: 'Sunil Kuliyal',
      role: 'Pioneer',
      image: '/Media/sunil.jpg',
      quote: 'We envision Muskurahat as a home of purity—where food fuels health and service spreads smiles.'
    },
    {
      name: 'Sandeep Negi',
      role: 'Quality Manager',
      image: '/Media/sandeep.jpg',
      quote: 'Every bite should bring a smile; that\'s the Muskurahat promise of quality.'
    },
    {
      name: 'Mahavir Shukla',
      role: 'Marketing',
      image: '/Media/mahavir.jpg',
      quote: 'Jahan khana ho pure, wahan muskaan ho sure.'
    },
    {
      name: 'Anmol Singh',
      role: 'Transport Manager',
      image: '/Media/anmol.jpg',
      quote: 'Ensuring every meal reaches you fresh, hot, and on time with our reliable delivery network.'
    },
   
    {
      name: 'Mamta Bangari',
      role: 'HR & Customer Feedback',
      image: '/Media/mamta.jpg',
      quote: 'Building a happy team and listening to our customers to continuously improve our service.'
    },
    {
      name: 'Rakesh Prasad',
      role: 'Marketing',
      image: '/Media/rakesh.jpg',
      quote: 'Spreading awareness about healthy food choices and our mission of compassionate dining.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="team" className="py-20 bg-white">
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
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals behind Muskurahat Food Services who work together 
            to bring you healthy, homely meals with love and care.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group cursor-pointer h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="w-full h-80 overflow-hidden"
                    style={{ aspectRatio: '3/4' }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      style={{ aspectRatio: '3/4' }}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Name and Role on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Quote */}
                  <blockquote className="text-gray-700 text-center italic leading-relaxed">
                    "{member.quote}"
                  </blockquote>

                  {/* Contact Actions (Hidden for demo) */}
                  <div className="flex justify-center space-x-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-primary-green/10 rounded-full flex items-center justify-center hover:bg-primary-green hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-primary-green/10 rounded-full flex items-center justify-center hover:bg-primary-green hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-gray-100"
        >
          <div className="text-center space-y-8">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gray-800">
              United by Our Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality First',
                  description: 'We never compromise on the quality of ingredients and preparation'
                },
                {
                  title: 'Customer Care',
                  description: 'Every customer is family, and we treat them with utmost care and respect'
                },
                {
                  title: 'Social Impact',
                  description: 'Together we work towards making a positive difference in society'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-green to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-gray-800">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}