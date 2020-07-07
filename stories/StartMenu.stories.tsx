import React from 'react';
import { storiesOf } from '@storybook/react';

const Certificate = require('../src/assets/icons/certificate.png');

import { StartMenu } from '../src';

storiesOf('Start Menu', module)
  .add('Default', () => 
    <div style={{height: "100vh", width: "100vw"}}><StartMenu /></div>);

storiesOf('Start Menu', module)
  .add('Open Menu', () => 
  <div style={{height: "100vh", width: "100vw"}}><StartMenu isOpen={true} /></div>);

storiesOf('Start Menu', module)
  .add('With Itens Menu', () => {
    const itens = [
      {
        title: 'Skills',
        icon: (<img src={Certificate} alt="Skills" />),
        click: () => console.log('Skills')
      }
    ];

    return <div style={{height: "100vh", width: "100vw"}}><StartMenu  menuItens={itens} /></div>
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
    return <div style={{height: "100vh", width: "100vw"}}><StartMenu windowsItens={itens} /></div>
  });