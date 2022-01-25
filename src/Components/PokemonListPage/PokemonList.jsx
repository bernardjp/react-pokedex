import styled from '@emotion/styled';
import { getIDfromURL } from '../../mappers/pokemonData';
import PokemonCard from '../PokemonCard';

const StyledGrid = styled.ul`
  display: grid;
  gap: 1.3rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-items: center;
  margin: 0;
  padding: 1.5rem 0;
  width: inherit;
`;

const StyledTitle = styled.h1`
  color: #ef5350;
  font-size: 2.5rem;
  margin: 2rem 0 1rem 0;
  text-align: center;
  transform: rotate(-5deg);
`;

function PokemonGrid({ resources }) {
  const pokemons = resources.results;

  return (
    <>
      <StyledTitle>Pick a Snap!</StyledTitle>
      <StyledGrid>
        {pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            id={getIDfromURL(pokemon.url)}
            size="medium"
          />
        ))}
      </StyledGrid>
    </>
  );
}

export default PokemonGrid;
