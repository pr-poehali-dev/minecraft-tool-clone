
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  fallback?: string;
}

export function Icon({
  name,
  color,
  size = 24,
  strokeWidth = 2,
  fallback = "CircleAlert",
  className,
  ...props
}: IconProps) {
  // Try to get the icon from lucide
  const LucideIcon = (LucideIcons as any)[name] || (LucideIcons as any)[fallback];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found, and fallback "${fallback}" also not found.`);
    return <span className={cn("inline-block", className)} {...props}>⚠️</span>;
  }

  return (
    <span className={cn("inline-block", className)} {...props}>
      <LucideIcon
        color={color}
        size={size}
        strokeWidth={strokeWidth}
      />
    </span>
  );
}

export default Icon;
