import React, { useState } from 'react';

const cards = [
     {
    title: "Interview Crash Course:",
    subtitle: "System Design for Interviews and Beyond",
    buttonText: "Start Learning",
    bg: "bg-gradient-to-r from-green-500 to-emerald-700",
  },
  {
    title: "Interview Crash Course:",
    subtitle: "Data Structures and Algorithms",
    buttonText: "Start Learning",
    bg: "bg-gradient-to-r from-purple-500 to-indigo-600",
  },
  {
    title: "Top Interview Tips:",
    subtitle: "Most Commonly Asked Questions",
    buttonText: "Start Learning",
    bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
  {
    title: "Interview Crash Course:",
    subtitle: "System Design for Interviews and Beyond",
    buttonText: "Start Learning",
    bg: "bg-gradient-to-r from-green-500 to-emerald-700",
  },
  {
    title: "Interview Crash Course:",
    subtitle: "Data Structures and Algorithms",
    buttonText: "Start Learning",
    bg: "bg-gradient-to-r from-purple-500 to-indigo-600",
  },
  {
    title: "Interview Tips:",
    subtitle: "Most Commonly Asked Questions",
    buttonText: "Start Learning",
    bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },

];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 2;
  const maxIndex = cards.length - visibleCount; // 6 − 2 = 4

  const next = () => {
    setCurrentIndex(i => Math.min(i + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex(i => Math.max(i - 1, 0));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 overflow-hidden">
      <div
        className="flex transition-transform duration-500 px-2"
        style={{
          // instead of 100% per step, move by 100/visibleCount percent
          transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
        }}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`
              flex-shrink-0
              w-[calc(50%-1rem)]  /* two cards → each ~50% minus total gap */
              mx-2
              pt-5
              h-[200px]
              rounded-xl
              p-6
              text-white
              ${card.bg}
            `}
          >
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="mb-4">{card.subtitle}</p>
            <button className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className={`
          absolute top-1/2 left-2 transform -translate-y-1/2
          bg-white/70 p-2 rounded-full shadow
          hover:bg-white transition
          ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        &#8592;
      </button>

      <button
        onClick={next}
        disabled={currentIndex === maxIndex}
        className={`
          absolute top-1/2 right-2 transform -translate-y-1/2
          bg-white/70 p-2 rounded-full shadow
          hover:bg-white transition
          ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
