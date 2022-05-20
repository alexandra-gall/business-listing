import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe('Component <Header />', () => {
  test('should render logo', () => {
    render(<Header />);
    expect(screen.getByAltText('Devexperts')).toBeInTheDocument();
  });
});
