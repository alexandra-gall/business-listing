import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

import { useDataLoading } from '../../services/hooks';
import { Business } from '../Business';
import { Header } from '../Header';
import { Listing } from '../Listing';

const Background = styled.div`
  background-color: #f8f8ff;
  height: 100vh;
`;

export const App: React.FC = () => {
  const { business } = useDataLoading();
  return (
    <Background data-testid='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Listing list={business} />} />
            <Route path=":id" element={<Business list={business} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Background>
  );
}
