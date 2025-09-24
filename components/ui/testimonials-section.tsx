
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
        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
    </section>
  );
}