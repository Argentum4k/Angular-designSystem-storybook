import type { Meta, StoryObj } from '@storybook/angular';

import Button from '../lib/button/button.component';



const meta: Meta<Button> = {
  title: 'Atomics/Buttons',
  component: Button,
  tags: ['autodocs'],
  render: (args: Button) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    label: { control: 'text' },
    // we need to override here since in Angular it could be null as well (see button.component.ts) and therefore it would become an ambigious data type for storybook
  }
}
export default meta;

type Story = StoryObj<Button>;

export const FancyBlueButton: Story = {
  args: {
    label: 'Button',
  },
};

export const FancyPinkButton: Story = {
  args: {
    label: 'Pink version',
    pink: true,
  },
};

