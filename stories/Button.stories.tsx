import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

storiesOf('Button', module)
  .add('Default', () => <Button>Test</Button>);

storiesOf('Button', module)
  .add('Small', () => <Button small>Test</Button>);


