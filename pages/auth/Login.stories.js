import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { Login } from './login.js';

export default {
  title: 'Page/Logout',
  component: Login,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Login {...args} />;

