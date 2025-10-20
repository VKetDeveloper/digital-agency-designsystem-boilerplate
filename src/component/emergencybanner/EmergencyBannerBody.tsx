import React from 'react';

export const EmergencyBannerBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // 元のHTMLにある .flex.flex-col.gap-2.desktop:gap-4 をここで再現
    <div className='flex flex-col gap-2 desktop:gap-4'>
      {children}
    </div>
  );
};