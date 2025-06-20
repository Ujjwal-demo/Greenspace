import React from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
  animationDuration: number;
}

const StarField: React.FC = () => {
  const stars: Star[] = React.useMemo(() => {
    return Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      animationDelay: Math.random() * 3,
      animationDuration: Math.random() * 4 + 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      <div className="absolute top-1/4 left-0 w-1 h-1 bg-white rounded-full opacity-80 animate-shooting-star-1" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-shooting-star-2" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-teal-300 rounded-full opacity-70 animate-shooting-star-3" />
    </div>
  );
};

export default StarField;