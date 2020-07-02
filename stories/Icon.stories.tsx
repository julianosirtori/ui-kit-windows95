import React from 'react';
import { storiesOf } from '@storybook/react';

import { Icon } from '../src';

storiesOf('Icon', module)
  .add('Default', () => <Icon title="Skills" click={() => {console.log('teste')}} iconName="folder" />);