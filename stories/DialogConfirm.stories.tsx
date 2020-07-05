import React from 'react';
import { storiesOf } from '@storybook/react';

import { DialogConfirm } from '../src';

storiesOf('DialogConfirm', module)
  .add('Default', () => <DialogConfirm />);