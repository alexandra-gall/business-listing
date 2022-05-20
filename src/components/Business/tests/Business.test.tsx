import React from 'react';

import Router from "react-router-dom";
import { render, screen } from '@testing-library/react';

import { Business } from '../Business';

const mockList = [
  {
    id: 'e2nihr3i2nrin2n2',
    name: 'Microsoft',
    description: 'Microsoft Corporation',
    phone: '+838 5645 0209',
    image: 'https://picsum.photos/id/1/5616/3744/?blur=4',
    email: 'info@microsoft.com',
    address: {
      number: '32',
      street: 'Hunters Way',
      zip: '1243',
      city: 'Slough',
      country: 'UK',
    }
  }
];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe('Component <Business />', () => {

  test('should render contact information about company', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: 'e2nihr3i2nrin2n2' })
    render(<Business list={mockList} />);

    expect(screen.getByText('+838 5645 0209')).toBeInTheDocument();
    expect(screen.getByText('info@microsoft.com')).toBeInTheDocument();
  });

  test('should render address information about company', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: 'e2nihr3i2nrin2n2' })
    render(<Business list={mockList} />);

    expect(screen.getByText('32 Hunters Way')).toBeInTheDocument();
    expect(screen.getByText('Slough')).toBeInTheDocument();
  });

});
