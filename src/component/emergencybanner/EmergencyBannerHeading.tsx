import React from 'react';

// level propsでh1～h6のタグを指定できるようにしています
interface EmergencyBannerHeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export const EmergencyBannerHeading: React.FC<EmergencyBannerHeadingProps> = ({ level: HeadingTag, children }) => {
  // 提供されたクラス名 'text-std-20N-150' がないため、太字で適切なフォントサイズを仮定
  // 例: text-xl (デスクトップでは text-2xl)
  return (
    <HeadingTag className='text-xl desktop:text-2xl font-bold'>
      {children}
    </HeadingTag>
  );
};