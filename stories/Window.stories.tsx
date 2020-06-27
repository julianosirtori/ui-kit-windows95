import React from 'react';
import { storiesOf } from '@storybook/react';

import { Window } from '../src';

storiesOf('Window', module)
  .add('Default', () => <Window />);

storiesOf('Window', module)
  .add('Custom Texts', () => {
      const  footerMessages = ["7 Objects", "It isn't a bug it's a feature"];
    
      return ( <Window title="Skills" footerMessages={footerMessages} />)
    }
  );

storiesOf('Window', module)
  .add('Custom Header', () => <Window headerBackgroundColor="#007acc" headerTextColor="#000" />);

storiesOf('Window', module)
  .add('With children', () => <Window ><h1>TESTE</h1></Window>);

storiesOf('Window', module)
  .add('Closed', () => <Window visible={false} />);
