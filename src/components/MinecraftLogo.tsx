
import React from 'react';

const MinecraftLogo: React.FC = () => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-6xl md:text-7xl minecraft-title text-minecraft-dirt inline-block">
        <span className="text-minecraft-grass">M</span>
        <span className="text-minecraft-stone">i</span>
        <span className="text-minecraft-dirt">n</span>
        <span className="text-minecraft-wood">e</span>
        <span className="text-minecraft-grass">c</span>
        <span className="text-minecraft-stone">r</span>
        <span className="text-minecraft-dirt">a</span>
        <span className="text-minecraft-wood">f</span>
        <span className="text-minecraft-grass">t</span>
        <span className="text-minecraft-stone">.</span>
        <span className="text-minecraft-dirt">t</span>
        <span className="text-minecraft-wood">o</span>
        <span className="text-minecraft-grass">o</span>
        <span className="text-minecraft-stone">l</span>
      </h1>
      <div className="text-xl text-minecraft-black mt-2">Ваш инструментарий для майнкрафта</div>
    </div>
  );
};

export default MinecraftLogo;
