import React from 'react';

import { TextInput } from './TextInput';

export default {
  title: 'Component/Forms/TextInput',
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id:'textInput',
  label:'textInput',
  type: 'text',
  value:'textInput',
  placeholder: 'textInput',
};