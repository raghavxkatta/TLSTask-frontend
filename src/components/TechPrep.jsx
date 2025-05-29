import React from 'react';
import {
  Code2,
  Database,
  Cloud,
  Terminal,
  BookOpen,
  Users,
  GraduationCap,
  Star,
} from 'lucide-react';

const features = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Master modern web technologies and frameworks',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data Science',
    description: 'Learn data analysis and machine learning',
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Computing',
    description: 'Explore cloud platforms and services',
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: 'DevOps',
    description: 'Understanding modern development operations',
  },
];

const stats = [
  {
    icon: <BookOpen className="w-8 h-8 text-[#070054]" />,
    label: 'Courses Offered',
    value: '10+',
  },
  {
    icon: <Users className="w-8 h-8 text-[#070054]" />,
    label: 'Batches Trained',
    value: '400+',
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[#070054]" />,
    label: 'Students Trained',
    value: '5000+',
  },
  {
    icon: <Star className="w-8 h-8 text-[#070054]" />,
    label: 'Google Rating',
    value: '4.6',
  },
];

const TechPrep = () => {
  return (
    <section id="techprep" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#070054] mb-4">TechPrep Program</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive placement training designed to prepare you for success in the tech industry.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:bg-[#070054] hover:text-white transition-colors duration-300 border border-gray-100 group"
            >
              <div className="text-[#070054] mb-4 group-hover:text-white">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mb-16">
          <button className="bg-[#070054] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            View Full Curriculum
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#f9f9f9] p-6 rounded-lg shadow-md border border-transparent hover:border-[#070054] transition-all duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-[#070054]">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPrep;
