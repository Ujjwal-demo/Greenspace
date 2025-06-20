import React from 'react';

interface Rocket {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: 'up' | 'diagonal' | 'curve';
  delay: number;
}

const RocketAnimation: React.FC = () => {
  const rockets: Rocket[] = React.useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15,
      speed: Math.random() * 3 + 2,
      direction: ['up', 'diagonal', 'curve'][Math.floor(Math.random() * 3)] as 'up' | 'diagonal' | 'curve',
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
      {rockets.map((rocket) => (
        <div
          key={rocket.id}
          className={`absolute text-teal-400 opacity-30 ${
            rocket.direction === 'up' ? 'animate-rocket-up' :
            rocket.direction === 'diagonal' ? 'animate-rocket-diagonal' :
            'animate-rocket-curve'
          }`}
          style={{
            left: `${rocket.x}%`,
            top: `${rocket.y}%`,
            fontSize: `${rocket.size}px`,
            animationDelay: `${rocket.delay}s`,
            animationDuration: `${rocket.speed + 8}s`,
          }}
        >
          🚀
        </div>
      ))}
      
      {/* Main hero rocket */}
      <div className="absolute bottom-10 right-10 text-6xl text-teal-400 opacity-40 animate-rocket-hero">
        🚀
      </div>
      
      {/* Orbital rockets */}
      <div className="absolute top-1/4 left-1/4 text-4xl text-blue-400 opacity-25 animate-rocket-orbit">
        🛸
      </div>
      <div className="absolute top-3/4 right-1/3 text-3xl text-purple-400 opacity-30 animate-rocket-orbit-reverse">
        🛰️
      </div>
    </div>
  );
};

export default RocketAnimation;