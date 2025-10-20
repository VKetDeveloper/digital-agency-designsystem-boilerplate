// /components/NotificationBanner/NotificationBannerHeading.tsx

import React from 'react';

interface NotificationBannerHeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export const NotificationBannerHeading: React.FC<NotificationBannerHeadingProps> = ({ level: HeadingTag, children }) => {
  return (
    // 見出しとして適切にスタイルを適用
    <HeadingTag className='text-lg font-bold'>
      {children}
    </HeadingTag>
  );
};