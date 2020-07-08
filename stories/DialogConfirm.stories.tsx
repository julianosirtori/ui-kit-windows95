import React from 'react';
import { storiesOf } from '@storybook/react';

import { DialogConfirm } from '../src';

storiesOf('DialogConfirm', module)
  .add('Default', () => (
    <DialogConfirm 
      title="Confirm Folder Delete"
      description="Are you sure want to remove the folder ?"
      textBtnYes="Yes"
      textBtnNo="No"
      callBackClickYes={() => {console.log("yes")}} />));