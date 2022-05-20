import React from 'react';

import { render, screen } from '@testing-library/react';

import { App } from '../App';

describe('Component <App />', () => {
  test('should be rendered', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
