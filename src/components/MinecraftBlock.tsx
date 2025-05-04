
import React from 'react';

interface MinecraftBlockProps {
  type: 'grass' | 'dirt' | 'stone' | 'wood';
  className?: string;
  children?: React.ReactNode;
}

const MinecraftBlock: React.FC<MinecraftBlockProps> = ({ 
  type, 
  className = "",
  children
}) => {
  return (
    <div className={`block ${type}-block w-16 h-16 ${className}`}>
      {children}
    </div>
  );
};

export default MinecraftBlock;
