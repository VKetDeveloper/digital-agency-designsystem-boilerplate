import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export const EmergencyBannerBody_v2 = (props: Props) => {
  const { className, children } = props;

  return <div className={`mt-2 desktop:mt-4 ${className ?? ''}`}>{children}</div>;
};
