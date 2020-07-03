import React from 'react';
import { storiesOf } from '@storybook/react';
import { MdInfoOutline } from 'react-icons/md';

import { Icon } from '../src';

storiesOf('Icon', module)
  .add('Default', () => <Icon title="Skills" click={() => {console.log('teste')}} iconName="folder" />);

  storiesOf('Icon', module)
  .add('Custom Icon', () => <Icon title="Skills" click={() => {console.log('teste')}} customicon={(<MdInfoOutline/>)} />);