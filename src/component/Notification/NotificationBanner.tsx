'use client';

import type { ReactNode } from 'react';
import { NotificationBannerIcon } from './parts/Icon';
import { bannerStyleClasses, bannerTypeClasses } from './styles';
import type { NotificationBannerStyle_v2, NotificationBannerType_v2 } from './types';

export type NotificationBannerProps = {
  className?: string;
  children: ReactNode;
  bannerStyle: NotificationBannerStyle_v2;
  type: NotificationBannerType_v2;
};

export const NotificationBanner_v2 = (props: NotificationBannerProps) => {
  const { className, children, bannerStyle, type } = props;

  return (
    <div
      className={`
        grid grid-cols-[var(--icon-size)_1fr_minmax(0,auto)] border-current p-4 pt-2 [--icon-size:calc(24/16*1rem)] gap-x-3 gap-y-4
        desktop:gap-x-6 desktop:p-6 desktop:[--icon-size:calc(36/16*1rem)]
        ${bannerStyleClasses[bannerStyle]}
        ${bannerTypeClasses[type]}
        ${className ?? ''}
      `}
    >
      <div className="mt-1.5 self-start desktop:mt-0">
        <NotificationBannerIcon className="h-auto max-w-full" type={type} />
      </div>

      {children}
    </div>
  );
};
