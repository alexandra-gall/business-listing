import React from 'react';

import { render, screen } from '@testing-library/react';

import { Listing } from '../Listing';
import { BusinessType } from '../../../services/models';

const mockList = [
  {
    id: 'e2nihr3i2nrin2n2',
    name: 'Microsoft',
    description: 'Microsoft Corporation',
  } as BusinessType
];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe('Component <Listing />', () => {
  test('should render list of companies', () => {
    render(<Listing list={mockList} />);
    expect(screen.getByText('Microsoft Corporation')).toBeInTheDocument();
  });
});

