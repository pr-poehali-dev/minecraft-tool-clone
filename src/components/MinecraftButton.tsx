
import React from 'react';

interface MinecraftButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const MinecraftButton: React.FC<MinecraftButtonProps> = ({ 
  children, 
  onClick,
  className = ""
}) => {
  return (
    <button 
      className={`minecraft-btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MinecraftButton;
