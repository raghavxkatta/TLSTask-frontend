// src/components/SummerIntern.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Briefcase } from 'lucide-react';

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 12 }
  }
};

const SummerIntern = () => {
  const stats = [
    {
      Icon: Calendar,
      title: '2 Months Duration',
      text: 'Intensive learning and hands-on experience'
    },
    {
      Icon: Users,
      title: 'Mentorship',
      text: '1-on-1 guidance from industry experts'
    },
    {
      Icon: Award,
      title: 'Certification',
      text: 'Industry-recognized certification'
    },
    {
      Icon: Briefcase,
      title: 'Job Ready',
      text: 'Practical skills for employment'
    }
  ];

  return (
    <section id="summerintern" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <h2 className="text-4xl font-bold text-[#070054] mb-4">
            Summer Internship Program
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gain real-world experience through our comprehensive summer internship program designed for undergraduate students.
          </p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map(({ Icon, title, text }, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gray-50 rounded-lg border-2 border-transparent group"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <Icon className="w-10 h-10 text-[#070054] mb-4 group-hover:text-blue-500 transition-colors" />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {title}
                </h3>
                <p className="text-gray-600 text-center">{text}</p>
              </div>
              {/* Blue border on hover */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 pointer-events-none transition-colors"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="bg-[#070054] text-white rounded-lg p-8 text-center"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Applications Open for Summer 2025
          </h3>
          <p className="text-lg mb-6">
            Limited seats available. Apply now to secure your spot!
          </p>
          <button className="bg-white text-[#070054] px-8 py-3 rounded-lg font-semibold hover:bg-[#d9d9d9] transition-colors">
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SummerIntern;
