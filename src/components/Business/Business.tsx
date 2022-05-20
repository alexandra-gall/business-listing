import React from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { BusinessType } from '../../services/models';

const Paper = styled.div`
  background-color: #fff;
  width: 100vw;
  height: calc(100vh - 90px);
`;

const Image = styled.img`
  height: 370px;
  width: calc(100vw - 12px);
  padding: 0 6px;
  object-fit: cover;
  opacity: 0.5
`;

const WrapContainer = styled.div`
  background-color: #f8f8ff;
  height: 100vh;
  margin: -6px 6px;
  padding-top: 24px;
`;

const InfoContainer = styled.div`
  display: flex;
  height: 200px;
  min-width: 1020px;
  max-width: 1350px;
  justify-content: space-between;
  margin: 0 auto;
`;

const AsideBlock = styled.div`
  width: 254px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  align-items: flex-start;
  box-sizing: border-box;
`;

const MainBlock = styled.div`
  background-color: #fff;
  padding: 0 16px;
  max-width: 750px;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  padding: 20px 0;
`;

const Text = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #696969;
  line-height: 16px;
`;

const NearbyString = styled(Text)`
  background-color: #f8f8ff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 16px;
  margin: 2px;
`;

type Props = {
  list: BusinessType[];
};

export const Business: React.FC<Props> = (props) => {
  let { id } = useParams();
  const business = props.list.find((item) => item.id === id);
  if (!business) {
    return null;
  }
  const nearCompanies = props.list.filter((item) => item.address.country === business.address.country && item.id !== id);
  const { zip, street, country, number, city } = business.address;
  return (
    <Paper>
      <Image src={business.image} alt='picture' />
      <WrapContainer>
        <InfoContainer>
          <AsideBlock>
            <Title>Address</Title>
            <div>
              <Text>{number} {street}</Text>
              <Text>{city}</Text>
              <Text>{country}, {zip}</Text>
            </div>
          </AsideBlock>
          <MainBlock>
            <Title>Nearby Places</Title>
            {nearCompanies.map((item) => <NearbyString key={item.id}>{item.description}</NearbyString>)}
          </MainBlock>
          <AsideBlock>
            <Title>Contact</Title>
            <div>
              <Text>{business.phone}</Text>
              <Text>{business.email}</Text>
            </div>
          </AsideBlock>
        </InfoContainer>
      </WrapContainer>
    </Paper>
  );
};
