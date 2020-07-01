import React from 'react';
import { storiesOf } from '@storybook/react';

import { Icon } from '../src';

storiesOf('Icon', module)
  .add('Default', () => <Icon title="Skills" icon="folder" />);