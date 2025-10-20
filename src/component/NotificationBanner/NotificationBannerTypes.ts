export type BannerType = 'info1' | 'info2' | 'warning' | 'error' | 'success';
export type BannerStyle = 'color-chip';

interface ColorMap {
  background: string;
  border: string;
  text: string;
  buttonOutlineText: string;
  buttonOutlineHoverText: string;
  buttonOutlineHoverBg: string;
  buttonOutlineActiveText: string;
  buttonOutlineActiveBg: string;
  buttonSolidBg: string;
  buttonSolidHoverBg: string;
  buttonSolidActiveBg: string;
}

// カラースキーム定義
export const COLOR_SCHEMES: Record<BannerType, ColorMap> = {
  info1: {
    background: 'bg-blue-50',
    border: 'border-blue-600',
    text: 'text-gray-800',
    buttonOutlineText: 'text-blue-600',
    buttonOutlineHoverText: 'hover:text-blue-700',
    buttonOutlineHoverBg: 'hover:bg-blue-100',
    buttonOutlineActiveText: 'active:text-blue-800',
    buttonOutlineActiveBg: 'active:bg-blue-200',
    buttonSolidBg: 'bg-blue-600',
    buttonSolidHoverBg: 'hover:bg-blue-700',
    buttonSolidActiveBg: 'active:bg-blue-800',
  },
  info2: {
    background: 'bg-gray-50',
    border: 'border-gray-800',
    text: 'text-gray-800',
    buttonOutlineText: 'text-gray-800',
    buttonOutlineHoverText: 'hover:text-gray-900',
    buttonOutlineHoverBg: 'hover:bg-gray-200',
    buttonOutlineActiveText: 'active:text-black',
    buttonOutlineActiveBg: 'active:bg-gray-300',
    buttonSolidBg: 'bg-gray-800',
    buttonSolidHoverBg: 'hover:bg-gray-900',
    buttonSolidActiveBg: 'active:bg-black',
  },
  warning: {
    background: 'bg-yellow-50',
    border: 'border-yellow-400',
    text: 'text-gray-800',
    buttonOutlineText: 'text-yellow-600',
    buttonOutlineHoverText: 'hover:text-yellow-700',
    buttonOutlineHoverBg: 'hover:bg-yellow-100',
    buttonOutlineActiveText: 'active:text-yellow-800',
    buttonOutlineActiveBg: 'active:bg-yellow-200',
    buttonSolidBg: 'bg-yellow-500',
    buttonSolidHoverBg: 'hover:bg-yellow-600',
    buttonSolidActiveBg: 'active:bg-yellow-700',
  },
  error: {
    background: 'bg-red-50',
    border: 'border-red-500',
    text: 'text-gray-800',
    buttonOutlineText: 'text-red-600',
    buttonOutlineHoverText: 'hover:text-red-700',
    buttonOutlineHoverBg: 'hover:bg-red-100',
    buttonOutlineActiveText: 'active:text-red-800',
    buttonOutlineActiveBg: 'active:bg-red-200',
    buttonSolidBg: 'bg-red-600',
    buttonSolidHoverBg: 'hover:bg-red-700',
    buttonSolidActiveBg: 'active:bg-red-800',
  },
  success: {
    background: 'bg-green-50',
    border: 'border-green-500',
    text: 'text-gray-800',
    buttonOutlineText: 'text-green-600',
    buttonOutlineHoverText: 'hover:text-green-700',
    buttonOutlineHoverBg: 'hover:bg-green-100',
    buttonOutlineActiveText: 'active:text-green-800',
    buttonOutlineActiveBg: 'active:bg-green-200',
    buttonSolidBg: 'bg-green-600',
    buttonSolidHoverBg: 'hover:bg-green-700',
    buttonSolidActiveBg: 'active:bg-green-800',
  },
};

// Contextで使用される色マッパー型
export type ColorMapper = (key: keyof ColorMap) => string;
