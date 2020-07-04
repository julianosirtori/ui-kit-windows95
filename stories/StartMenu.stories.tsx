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
  .add('With windows itens', () => {
    const itens =  [
      {
        title: 'Internet Connection',
        active: false,
        click: () => console.log('Internet Connection')
      },
      {
        title: 'Explorer',
        active: false,
        click: () => console.log('Explorer')
      },
      {
        title: 'Music player',
        active: true,
        click: () => console.log('Music player')
      },
    ];
    return <StartMenu windowsItens={itens} isOpen={true} />
  });