import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { pokeapi } from '../utils/fetchAPI';
import spritePlaceholder from '../images/pokeball3c.png';

const MEDIA_QUERY_BP = [630, 430, 330];
const IMG_WIDTH = 170;
const HOVER_SCALE = 1.1;
const CARD_SIZE = {
  small: 0.5,
  medium: 1,
  large: 1.5
};

const CardWrapper = styled(Link)`
  align-items: center;
  background-color: #e5e5e5;
  box-shadow: 4px 4px 4px #888;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: ${props => CARD_SIZE[props.theme.size] * 0.5}rem;
  text-decoration: none;
  transition: 0.15s;
  width: ${props => CARD_SIZE[props.theme.size] * IMG_WIDTH}px;
  transform:
    rotate(${props => props.theme.tilt}deg);

  :hover {
    transform: scale(${HOVER_SCALE});
    box-shadow: 2px 2px 4px #888;
  }

  @media (max-width: ${MEDIA_QUERY_BP[1]}px) {
    width: ${CARD_SIZE.medium * IMG_WIDTH}px;

    :hover {
      transform: scale(${HOVER_SCALE});
    }
  }
`;

const PokemonImage = styled.img`
  box-shadow: inset 0px 0px 50px #b2a8a8;
  width: inherit;
`;

const PokemonName = styled.span`
  color: #4b262d;
  font-family: 'Permanent Marker', cursive;
  font-size: ${props => CARD_SIZE[props.theme.size] * 1.25}rem;
  text-align: center;
  text-transform: capitalize;
`;

function PokemonCard({ name, id, size }) {
  const [spriteURL, setSpriteUrl] = useState('');
  const cardTilt = Math.ceil(Math.random() * 5) - 3;

  useEffect(async () => {
    setSpriteUrl(await pokeapi.getPokemonSpriteURL(id));
  }, []);

  return (
    <CardWrapper to={`/pokemon/${id}`} theme={{ tilt: cardTilt, size }}>
      <PokemonImage
        src={spriteURL || spritePlaceholder}
        alt={`${name}-img`}
      />
      <PokemonName>{name.replaceAll('-', ' ')}</PokemonName>
    </CardWrapper>
  );
}

export default PokemonCard;
