import React from 'react';

import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.div`
  height: 90px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate('/');
  };

  return (
    <HeaderWrapper onClick={handleClick}>
      <img
        src="https://devexperts.com/app/themes/devexperts/dist/images/devexperts-logo-orange.17fa0fc7.svg"
        alt="Devexperts"
        data-testid='logo'
      />
    </HeaderWrapper>
  )
}