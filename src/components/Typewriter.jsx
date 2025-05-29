import React, { useState, useEffect } from 'react';

export default function Typewriter({ text, speed = 100 }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i === text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
      {displayed}
      <span className="border-r-2 border-white animate-blink ml-1"></span>
    </h1>
  );
}
