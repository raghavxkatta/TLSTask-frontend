import React from 'react';
import { Code, Layout, Palette } from 'lucide-react';

const DesignLab = () => {
  return (
    <section id="designlab" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#070054]">
              DesignLab: Interactive Learning
            </h2>
            <p className="text-lg text-gray-600">
              Experience hands-on learning with our interactive code playground. Build real projects while mastering HTML, CSS, and JavaScript.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Code className="w-6 h-6 text-[#070054] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Live Code Editor</h3>
                  <p className="text-gray-600">Write and preview code in real-time</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Layout className="w-6 h-6 text-[#070054] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Responsive Design</h3>
                  <p className="text-gray-600">Learn to create mobile-friendly layouts</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Palette className="w-6 h-6 text-[#070054] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">UI/UX Principles</h3>
                  <p className="text-gray-600">Master modern design principles</p>
                </div>
              </div>
            </div>

            <button className="bg-[#070054] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Try DesignLab
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-green-400 font-mono text-sm">
                <code>{`<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignLab;
