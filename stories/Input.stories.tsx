import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../src';

storiesOf('Input', module)
  .add('Default', () => <Input />);

storiesOf('Input', module)
  .add('Placeholder', () => <Input placeholder="Text of Windows95" />);