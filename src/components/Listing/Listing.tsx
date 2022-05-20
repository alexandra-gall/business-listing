import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { BusinessType } from '../../services/models';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  max-width: 1020px;
  margin: 50px auto;
`;

const BaseString = styled.div`
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  margin: 3px;
`;

const titleStyles = css`
  color: #8B1606FF;
  font-weight: bold;
  font-size: 16px;
`;

const TitleString = styled(BaseString)`
  text-transform: uppercase;
  height: 50px;
  ${titleStyles}
`
const InnerString = styled(BaseString)`
  cursor: pointer;
`;

const Sell = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
`;

const NameSell = styled(Sell)`
  min-width: 130px;
  padding-left: 30px;
  justify-content: flex-start;
  ${titleStyles}
`;

type Props = {
  list: BusinessType[];
};

export const Listing: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <TitleString>
        <NameSell>Name</NameSell>
        <Sell>Description</Sell>
      </TitleString>
      {props.list.map((item) => (
        <InnerString key={item.id} onClick={() => navigate(item.id)}>
          <NameSell>{item.name}</NameSell>
          <Sell>{item.description}</Sell>
        </InnerString>
      ))}
    </Container>
  );
}
