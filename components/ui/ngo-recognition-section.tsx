"use client";

import React from "react";
import { motion } from "framer-motion";

export function NgoRecognitionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-primary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Recognizing Our NGO Partners
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden mb-8 bg-white">
            <img
              src="/Media/nirmalaseva.jpg"
              alt="Nirmala Sewa Trust Recognition"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-lg text-gray-700 max-w-2xl text-center">
            We are deeply honored to be appreciated by Nirmala Sewa Trust for our humble efforts toward spreading care and compassion. This recognition reinforces our mission to serve with love, dignity, and dedication. Every small act of kindness brings us closer to creating a world where no one feels forgotten — a world built on hope, service, and humanity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}