import React from 'react';
import { GraduationCap, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#070054] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <h3 className="text-xl font-bold">TechLearn Solutions</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering tomorrow’s tech pros with hands-on training and real-world projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['home','techprep','designlab','summerintern','miniprojects'].map(id => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-gray-300 hover:text-white transition-colors capitalize"
                  >
                    {id.replace(/([a-z])([A-Z])/g,'$1 $2')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                'Placement Training',
                'Web Development',
                'Mobile App Development',
                'Data Science',
                'Cloud Computing'
              ].map(prog => (
                <li key={prog}>{prog}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-300">info@techlearnsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TechLearn Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
