import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator(storyFn => <div style={{ padding: '16px' }}>{storyFn()}</div>);