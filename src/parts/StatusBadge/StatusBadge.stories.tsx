import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusBadge } from './StatusBadge';

const meta = {
  id: 'Component/DADS v2/StatusBadge',
  title: 'Component/フォームコントロールラベル/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const Readonly: StoryObj = {
  render: (args) => {
    return <StatusBadge {...args}>編集不可</StatusBadge>;
  },
};

export const Disabled: StoryObj = {
  render: (args) => {
    return <StatusBadge {...args}>無効</StatusBadge>;
  },
};
