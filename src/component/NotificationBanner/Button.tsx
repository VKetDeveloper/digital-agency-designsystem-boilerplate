import React from 'react';
import { useBannerContext } from './NotificationBanner';
import { ColorMapper } from './NotificationBannerTypes';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'solid-fill';
  className?: string;
  children: React.ReactNode;
}

const SIZE_CLASSES = {
  sm: 'h-8 text-sm px-3',
  md: 'h-10 text-base px-4',
  lg: 'h-12 text-lg px-6',
} as const;

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  size = 'md',
  variant = 'outline',
  className = '',
  children,
}) => {
  let contextColors: ColorMapper | undefined;
  try {
    const context = useBannerContext();
    contextColors = context.colors;
  } catch {
    contextColors = undefined;
  }

  const getVariantClasses = (isSolid: boolean) => {
    if (contextColors) {
      if (isSolid) {
        return `
          ${contextColors('buttonSolidBg')} text-white border border-transparent
          ${contextColors('buttonSolidHoverBg')} 
          ${contextColors('buttonSolidActiveBg')}
        `;
      } else {
        return `
          bg-transparent border border-current 
          ${contextColors('buttonOutlineText')} 
          ${contextColors('buttonOutlineHoverText')} 
          ${contextColors('buttonOutlineHoverBg')}
          ${contextColors('buttonOutlineActiveText')} 
          ${contextColors('buttonOutlineActiveBg')}
        `;
      }
    }
    return isSolid
      ? 'bg-gray-800 text-white hover:bg-gray-900 active:bg-black'
      : 'border border-gray-800 text-gray-800 hover:text-gray-900 hover:bg-gray-100 active:text-black active:bg-gray-200';
  };

  const variantClasses = getVariantClasses(variant === 'solid-fill');
  const sizeClasses = SIZE_CLASSES[size];

  return (
    <button
      type={type}
      className={`
        ${sizeClasses}
        ${variantClasses}
        font-medium rounded-md transition-colors whitespace-nowrap
        ${className}
      `}
    >
      {children}
    </button>
  );
};
