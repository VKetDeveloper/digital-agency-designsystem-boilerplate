import type { ComponentProps } from 'react';

export const bannerBodyStyle_v2 =
  'block px-2.5 py-3.5 border-[6px] bg-white desktop:p-[calc(26/16*1rem)] border-warning-orange-1';

type Props = ComponentProps<'div'>;

export const EmergencyBanner_v2 = (props: Props) => {
  const { className, children } = props;

  return <div className={`${bannerBodyStyle_v2} ${className ?? ''}`}>{children}</div>;
};
