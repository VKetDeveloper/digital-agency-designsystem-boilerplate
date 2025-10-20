// /components/NotificationBanner/NotificationBannerBody.tsx

import React from 'react';

export const NotificationBannerBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 本文のフォントサイズを適用
  return <div className='text-sm'>{children}</div>;
};