import React from 'react';
import { ArrowRight } from 'lucide-react';
import Typewriter from './Typewriter';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Dashboard from './Dashboard';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen bg-[#070054] text-white py-10 px-6 md:px-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="space-y-8 mt-12">
            <Typewriter
              text="Transform Your Tech Career with Expert Training"
              speed={100}
            />
            <p className="text-lg md:text-xl text-gray-300">
              Comprehensive training programs designed to help you master modern technologies and launch your career in tech.
            </p>
            <div className="flex space-x-4">
              <button
                className="bg-white text-[#070054] px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-[#d9d9d9] transition-colors"
                onClick={() => navigate('/dashboard')}
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#070054] transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <Card />
        </div>
      </div>
    </section>
  );
}
