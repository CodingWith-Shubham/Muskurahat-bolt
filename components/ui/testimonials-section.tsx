'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './card';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'The food quality is amazing! It truly tastes like home-cooked meals. My family loves the variety and freshness.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      text: 'Being away from home for work, Muskurahat Food has been a blessing. The taste reminds me of my mother\'s cooking.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      name: 'Anita Singh',
      location: 'Bangalore',
      rating: 5,
      text: 'I appreciate their commitment to charity work. Good food with a good cause - what more can you ask for?',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      name: 'Mohit Gupta',
      location: 'Pune',
      rating: 5,
      text: 'Excellent service and punctual delivery. The monthly tiffin service has made my life so much easier!',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Kavita Agarwal',
      location: 'Chennai',
      rating: 5,
      text: 'The hygiene standards are top-notch and the packaging is eco-friendly. Truly a responsible food service.',
      avatar: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg'
    },
    {
      name: 'Vikram Yadav',
      location: 'Kolkata',
      rating: 5,
      text: 'Fresh ingredients, authentic taste, and reasonable prices. Muskurahat Food has won our hearts!',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
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
    <section id="testimonials" className="py-20 bg-white">
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Thousands of happy customers trust us for their daily meals. Here's what they have to say
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8 space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-center">
                    <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary-green" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary-yellow fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-center leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center justify-center space-x-4 pt-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-100"
        >
          {[
            { number: '10,000+', label: 'Happy Customers' },
            { number: '50,000+', label: 'Meals Delivered' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '15+', label: 'Cities Served' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center space-y-2"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-primary-green"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}