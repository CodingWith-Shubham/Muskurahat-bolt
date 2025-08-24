'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export function GallerySection() {
  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      alt: 'Happy family enjoying meal',
      category: 'Family Moments'
    },
    {
      src: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
      alt: 'Fresh vegetarian thali',
      category: 'Our Meals'
    },
    {
      src: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
      alt: 'Delivery process',
      category: 'Delivery'
    },
    {
      src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
      alt: 'Fresh ingredients',
      category: 'Fresh Ingredients'
    },
    {
      src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      alt: 'Cooking process',
      category: 'Kitchen'
    },
    {
      src: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
      alt: 'Happy customers',
      category: 'Happy Customers'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
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
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A glimpse into our kitchen, happy customers, and the love we put into every meal
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="text-white text-center space-y-2"
                >
                  <Eye className="w-8 h-8 mx-auto" />
                  <p className="font-medium">{image.category}</p>
                </motion.div>
              </div>

              {/* Category Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Want to see your smile in our gallery? Order your favorite meal today!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-orange hover:bg-primary-orange/90 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Order Your Meal
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}