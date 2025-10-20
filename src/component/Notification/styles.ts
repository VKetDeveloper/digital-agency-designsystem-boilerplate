import type { NotificationBannerStyle_v2, NotificationBannerType_v2 } from './types';

export const bannerStyleClasses: Record<NotificationBannerStyle_v2, string> = {
  standard: 'border-[3px] rounded-12',
  'color-chip':
    'border-2 !pl-6 shadow-[inset_8px_0_0_0_var(--color-chip-color)] desktop:!pl-10 desktop:shadow-[inset_16px_0_0_0_var(--color-chip-color)]',
};

export const bannerTypeClasses: Record<NotificationBannerType_v2, string> = {
  info1: 'text-blue-900 [--color-chip-color:currentColor]',
  info2: 'text-solid-gray-536 [--color-chip-color:currentColor]',
  warning: 'text-warning-yellow-2 [--color-chip-color:theme(colors.yellow.400)]',
  error: 'text-error-1 [--color-chip-color:currentColor]',
  success: 'text-success-2 [--color-chip-color:currentColor]',
};
