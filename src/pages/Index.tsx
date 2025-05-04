
import React from 'react';
import MinecraftLogo from '@/components/MinecraftLogo';
import MinecraftButton from '@/components/MinecraftButton';
import MinecraftBlock from '@/components/MinecraftBlock';
import { Icon } from '@/components/ui/icon';

const Index = () => {
  const tools = [
    { name: "Генератор Структур", icon: "Construction" },
    { name: "Калькулятор Зелий", icon: "Potion" },
    { name: "Крафт Гайд", icon: "Hammer" },
    { name: "Редстоун Схемы", icon: "Zap" }
  ];

  return (
    <div className="min-h-screen bg-minecraft-sky flex flex-col items-center py-10 px-4">
      {/* Земля и блоки сверху для декора */}
      <div className="absolute top-0 w-full flex justify-center">
        <div className="flex">
          {[...Array(8)].map((_, i) => (
            <MinecraftBlock key={i} type={i % 2 === 0 ? 'grass' : 'stone'} />
          ))}
        </div>
      </div>
      
      <div className="container max-w-5xl mx-auto z-10 mt-20">
        <MinecraftLogo />
        
        <div className="bg-white/80 pixel-borders p-6 md:p-10 mt-10">
          <h2 className="text-4xl text-minecraft-black minecraft-title mb-6">Выберите инструмент:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="pixel-borders bg-gray-200 p-4 hover:bg-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <Icon name={tool.icon} size={32} fallback="CircleAlert" />
                  </div>
                  <span className="text-2xl text-minecraft-black">{tool.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <MinecraftButton>Начать Игру</MinecraftButton>
            <MinecraftButton className="bg-minecraft-grass">Мультиплеер</MinecraftButton>
          </div>
        </div>
        
        {/* Нижний ряд блоков для декора */}
        <div className="flex justify-center mt-10">
          {[...Array(6)].map((_, i) => (
            <MinecraftBlock key={i} type={i % 3 === 0 ? 'dirt' : i % 3 === 1 ? 'wood' : 'stone'} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
