'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Star, Clock, Utensils } from 'lucide-react';
import { Button } from './button';
import { Card, CardContent } from './card';

export function MenuSection() {
  const menuItems = [
    {
      name: 'Veg Thali',
      description: 'Complete homely meal with dal, sabzi, roti, rice, and dessert',
      price: '₹120-150',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
      features: ['Healthy', 'Fresh', 'Complete Meal']
    },
    {
      name: 'Special Meals',
      description: 'Chef\'s special recipes with seasonal ingredients',
      price: '₹180-220',
      image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
      features: ['Premium', 'Seasonal', 'Chef Special']
    },
    {
      name: 'Family Pack',
      description: 'Perfect for 4-5 people with variety of dishes',
      price: '₹450-550',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
      features: ['Family Size', 'Variety', 'Value Pack']
    },
    {
      name: 'Breakfast Special',
      description: 'Healthy morning meals with traditional touch',
      price: '₹80-120',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
      features: ['Morning Fresh', 'Traditional', 'Energizing']
    },
    {
      name: 'Seasonal Delights',
      description: 'Special dishes made with seasonal fruits and vegetables',
      price: '₹100-180',
      image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg',
      features: ['Seasonal', 'Natural', 'Limited Time']
    },
    {
      name: 'Tiffin Service',
      description: 'Daily tiffin with rotating menu for working professionals',
      price: '₹2500/month',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      features: ['Daily Service', 'Office Delivery', 'Monthly Plan']
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
    <section id="menu" className="py-20 bg-white">
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
            Our Menu & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our variety of healthy, homely meals prepared with fresh ingredients and lots of love
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group cursor-pointer h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Star className="w-4 h-4 text-primary-yellow fill-current" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-semibold text-gray-800 group-hover:text-primary-green transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-primary-green/10 text-primary-green text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-2xl font-bold text-primary-orange">
                      {item.price}
                    </div>
                    <Button className="bg-primary-green hover:bg-primary-green/90 text-white rounded-full px-6">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-100"
        >
          {[
            {
              icon: Leaf,
              title: 'Fresh & Healthy',
              description: 'All ingredients sourced fresh daily with no artificial additives'
            },
            {
              icon: Clock,
              title: 'On-Time Delivery',
              description: 'Reliable delivery service ensuring your meal arrives hot and fresh'
            },
            {
              icon: Utensils,
              title: 'Homely Taste',
              description: 'Authentic flavors that remind you of your mother\'s cooking'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-green to-green-600 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}