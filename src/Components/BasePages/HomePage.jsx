import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import pokemonImg from '../../images/pokemon_landing_img.png';

export const PageWrapper = styled.section`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  justify-content: center;
  padding: 0 1rem;
  width: inherit;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  color: #ef5350;
  font-size: 3rem;
  line-height: 2.5rem;
  margin: 2rem 0;
  text-align: center;
  transform: rotate(-3deg);
  transition: 0.2seg;

  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  color: #343434;
  font-weight: ${props => props.theme.fontWeight};
  margin-bottom: 0;s
`;

export const PokemonImg = styled.img`
  display: block;
  width: 100%;
`;

export const ExploreBtn = styled(Link)`
  align-items: center;
  background-color: inherit;
  border: 1px #ef5350 solid;
  border-radius: 1rem;
  color: #ef5350;
  cursor: pointer;
  display: flex;
  font-size: 1.1rem;
  justify-content: center;
  margin: 2rem 0;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  transition: 0.2s;

  :hover {
    background-color: #ef5350;
    color: white;
    transform: rotate(-3deg) scale(1.15);
  }
  
  :active {
    background-color: #e94141;
    color: white;
    transform: rotate(-2deg);
  }
`;

export function HomePage() {
  return (
    <PageWrapper>
      <TextSection>
        <Title>Snap it All!</Title>
        <Description theme={{ fontWeight: 'bold' }}>
          Check the PokéSnaps and learn more about your favourites Pokémons!
        </Description>
        <Description theme={{ fontWeight: 'normal' }}>
          This Snaps Album is a list of all species of Pokémon currently known to exist.
          Inside each Pokémon Snap on this album you will find a wide array of information
          including its number in the National Pokédex, its oficial art, its name in English,
          its types, and lot more. Check it out!
        </Description>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ExploreBtn to="/page/1">START SNAPING</ExploreBtn>
        </div>
      </TextSection>
      <PokemonImg src={pokemonImg} alt="some-pic" />
    </PageWrapper>
  );
}

export const BasePageComponents = { PageWrapper, TextSection, Title, Description, PokemonImg };
