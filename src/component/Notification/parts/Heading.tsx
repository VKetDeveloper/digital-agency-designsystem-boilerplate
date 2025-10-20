import type { ComponentProps } from 'react';
import type { NotificationBannerHeadingLevel_v2 } from '../types';

type NotificationBannerHeadingProps_v2 = ComponentProps<'h2'> & {
  level: NotificationBannerHeadingLevel_v2;
};

export const NotificationBannerHeading_v2 = (props: NotificationBannerHeadingProps_v2) => {
  const { level, className, children, ...rest } = props;
  const Tag = level;

  return (
    <Tag
      className={`mt-1 text-std-17B-170 text-solid-gray-900 col-start-1 desktop:mt-0.5 desktop:text-std-20B-160 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};
