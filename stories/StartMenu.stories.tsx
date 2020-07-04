import React from 'react';
import { storiesOf } from '@storybook/react';

const Certificate = require('../src/assets/icons/certificate.png');

import { StartMenu } from '../src';

storiesOf('Start Menu', module)
  .add('Default', () => <StartMenu />);

storiesOf('Start Menu', module)
  .add('Open Menu', () => <StartMenu isOpen={true} />);

storiesOf('Start Menu', module)
  .add('With Itens Menu', () => {
    const itens = [
      {
        title: 'Skills',
        icon: (<img src={Certificate} alt="Skills" />),
        click: () => console.log('Skills')
      }
    ];

    return <StartMenu  menuItens={itens} />
  });

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
    return <StartMenu windowsItens={itens} />
  });