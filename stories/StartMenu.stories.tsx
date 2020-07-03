import React from 'react';
import { storiesOf } from '@storybook/react';

import { StartMenu } from '../src';

storiesOf('Start Menu', module)
  .add('Default', () => <StartMenu />);

storiesOf('Start Menu', module)
  .add('Open', () => <StartMenu isOpen={true} />);

storiesOf('Start Menu', module)
  .add('With Itens Menu', () => <StartMenu isOpen={true} />);

storiesOf('Start Menu', module)
  .add('With windows itens', () => <StartMenu isOpen={true} />);