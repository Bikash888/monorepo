import React from 'react';
import { addDecorator } from '@storybook/react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import "antd/dist/antd.css";

export const parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};

addDecorator(storyFn => <div style={{ padding: '16px' }}>{storyFn()}</div>);