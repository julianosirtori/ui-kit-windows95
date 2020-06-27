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
  .add('With children', () => (
    <Window>
      <h1>TEST</h1>
    </Window>)
  );

storiesOf('Window', module)
  .add('Max size', () => (
    <Window maxWidth={600} maxHeight={600} >
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </Window>
  ));


storiesOf('Window', module)
  .add('Closed', () => <Window visible={false} />);
