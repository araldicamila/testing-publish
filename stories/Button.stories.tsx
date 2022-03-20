import React from 'react';
import { Button, ButtonProps } from '../src/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Hey, I am a button!!',
};
