import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';
import { ButtonProps } from '../src/Button/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      defaultValue: 'Default Button',
    },
  },
  //   parameters: {
  //     controls: { expanded: true },
  //   },
};

export default meta;

const ButtonTemplate: Story<ButtonProps> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Default = ButtonTemplate.bind({});
export const Secondary = ButtonTemplate.bind({});

Secondary.args = {
  variant: 'secondary',
  label: 'Secondary Button',
};

// Default.args = {};
