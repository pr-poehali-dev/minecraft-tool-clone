
import React from 'react';
import MinecraftLogo from '@/components/MinecraftLogo';
import MinecraftButton from '@/components/MinecraftButton';
import MinecraftBlock from '@/components/MinecraftBlock';
import MinecraftCube3D from '@/components/MinecraftCube3D';
import { Icon } from '@/components/ui/icon';

const Index = () => {
  const tools = [
    { name: "Генератор Структур", icon: "Construction" },
    { name: "Калькулятор Зелий", icon: "Potion" },
    { name: "Крафт Гайд", icon: "Hammer" },
    { name: "Редстоун Схемы", icon: "Zap" }
  ];

  const gameFeatures = [
    { title: "Бесконечный мир", description: "Исследуйте процедурно генерируемый мир и создавайте всё, что можете представить", icon: "Globe" },
    { title: "Мультиплеер", description: "Играйте с друзьями и стройте вместе невероятные сооружения", icon: "Users" },
    { title: "Выживание и творчество", description: "Выберите своё приключение: борьба за выживание или безграничное творчество", icon: "Hammer" }
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

        {/* Продвижение игры - Hero секция */}
        <div className="bg-white/80 pixel-borders p-6 md:p-10 mt-6 mb-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl text-minecraft-black minecraft-title mb-4">
                Построй свой мир в 3D
              </h1>
              <p className="text-xl mb-6">
                Minecraft - это игра о размещении блоков и приключениях. Исследуйте случайно сгенерированные миры и постройте удивительные вещи: от простейших домов до величественных замков.
              </p>
              <div className="flex gap-4">
                <MinecraftButton className="bg-minecraft-grass">Купить сейчас</MinecraftButton>
                <MinecraftButton>Загрузить демо</MinecraftButton>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <MinecraftCube3D />
            </div>
          </div>
        </div>

        {/* Особенности игры */}
        <div className="bg-white/80 pixel-borders p-6 md:p-10 mb-10">
          <h2 className="text-4xl text-minecraft-black minecraft-title mb-6">Особенности игры</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="pixel-borders bg-gray-200 p-4 hover:bg-gray-300 transition-colors">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-4 bg-minecraft-stone rounded-full">
                    <Icon name={feature.icon} size={32} fallback="CircleAlert" />
                  </div>
                  <h3 className="text-2xl text-minecraft-black mb-2">{feature.title}</h3>
                  <p className="text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Инструменты */}
        <div className="bg-white/80 pixel-borders p-6 md:p-10 mb-10">
          <h2 className="text-4xl text-minecraft-black minecraft-title mb-6">Инструменты Minecraft</h2>
          
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
