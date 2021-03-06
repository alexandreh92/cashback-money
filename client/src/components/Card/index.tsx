import React from 'react';

import { Offer } from '~/@types';

import Flatbutton from '../Flatbutton';

import { Container, Image, Name, PremiumBadge } from './styles';

interface Props {
  offer: Offer;
}

const Card: React.FC<Props> = ({ offer }) => {
  /* Callbacks */
  const handleLinkPress = () => {
    window.open(`${offer.url}?referrer=cashback_money`, '_blank');
  };

  return (
    <Container>
      {offer.premium && <PremiumBadge>PREMIUM</PremiumBadge>}
      <Image src="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%20282.69%20228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20fill%3D%22%23A5A5A5%22%20cx%3D%22115.3%22%20cy%3D%2235.75%22%20r%3D%2235.75%22%2F%3E%3Cpath%20fill%3D%22%23A5A5A5%22%20d%3D%22M188.7%2C228h-81.34c-10.27%2C0-16.24-11.86-10.28-20.41l38.69-55.48l42.65-61.2%20c5.03-7.22%2C15.53-7.22%2C20.56%2C0l42.64%2C61.17l38.7%2C55.51c5.96%2C8.55-0.02%2C20.4-10.28%2C20.4H188.7z%22%2F%3E%3Cpath%20fill%3D%22%23A5A5A5%22%20d%3D%22M2.48%2C206.79l55.44-78.81c4.27-6.07%2C12.64-7.54%2C18.72-3.29l112.83%2C78.81%20c10.8%2C7.54%2C5.46%2C24.51-7.71%2C24.51l-168.27%2C0C2.58%2C228-3.8%2C215.71%2C2.48%2C206.79z%22%2F%3E%3C%2Fsvg%3E" />
      <Name>{offer.advertiser_name}</Name>
      <Flatbutton text="Shop Now" onClick={handleLinkPress} />
    </Container>
  );
};

export default Card;
