import React from 'react';
import Link from 'next/link';

interface EmergencyBannerButtonProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string; // 外部からのマージンなどを指定できるように
  children: React.ReactNode;
}

export const EmergencyBannerButton: React.FC<EmergencyBannerButtonProps> = ({ href, target, className, children }) => {
  // Next.jsのLinkコンポーネントを使用し、内部リンク・外部リンクを適切に処理
  // 緊急情報なので目立つ色 (例: bg-white text-red-600) にし、アクセシビリティのため太字にする
  return (
    <Link
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`
        ${className || ''}
        inline-flex justify-center items-center
        px-6 py-3
        bg-white text-red-600 font-bold
        rounded-md shadow-lg
        hover:bg-gray-100 transition-colors
        text-base
      `}
    >
      {children}
    </Link>
  );
};