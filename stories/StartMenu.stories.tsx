import React from 'react';
import { storiesOf } from '@storybook/react';

import { StartMenu } from '../src';

storiesOf('Start Menu', module)
  .add('Default', () => <StartMenu />);