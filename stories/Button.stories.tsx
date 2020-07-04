import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

storiesOf('Button', module)
  .add('Default', () => <Button>Cancel</Button>);

storiesOf('Button', module)
  .add('Small', () => <Button small>Ok</Button>);


storiesOf('Button', module)
  .add('Bold', () => <Button bold>Close</Button>);