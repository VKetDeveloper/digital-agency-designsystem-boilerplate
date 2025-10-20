'use client';

import React, { createContext, useContext } from 'react';
import { COLOR_SCHEMES, BannerType, BannerStyle, ColorMapper } from './NotificationBannerTypes';

interface NotificationBannerProps {
  type: BannerType;
  bannerStyle: BannerStyle;
  children: React.ReactNode; // ← 必須
}

interface BannerContextValue {
  colors: ColorMapper;
}

const BannerContext = createContext<BannerContextValue | null>(null);

export const useBannerContext = () => {
  const context = useContext(BannerContext);
  if (!context) throw new Error('useBannerContext must be used within NotificationBanner');
  return context;
};

/**
 * 通知バナーのメインコンテナ
 */
export const NotificationBanner: React.FC<NotificationBannerProps> = ({
  type,
  bannerStyle,
  children,
}) => {
  const colors: ColorMapper = (key) => COLOR_SCHEMES[type][key];

  return (
    <BannerContext.Provider value={{ colors }}>
      <div
        className={`border-l-4 p-4 my-4 rounded-md ${colors('background')} ${colors('border')} ${colors('text')}`}
      >
        {children}
      </div>
    </BannerContext.Provider>
  );
};

/** 見出し全体のラッパー */
export const NotificationBannerHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-2">{children}</div>
);

/** 見出しテキスト */
export const NotificationBannerHeading: React.FC<{ level?: 'h2' | 'h3' | 'h4'; children: React.ReactNode }> = ({
  level = 'h3',
  children,
}) => {
  const Tag = level;
  return <Tag className="font-bold text-lg">{children}</Tag>;
};

/** 本文ラッパー */
export const NotificationBannerBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-sm leading-relaxed">{children}</div>
);
