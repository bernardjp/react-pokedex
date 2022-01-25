import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import PokemonCard from '../PokemonCard';
import PokemonStats from './PokemonStats';
import { getPagefromPokemonID } from '../../utils/paginationCalc';
import { pokemonMapper } from '../../mappers/pokemonData';

const MainWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoWrapper = styled.article`
  align-items: center;
  display: grid;
  font-family: 'Architects Daughter', cursive;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const PokemonBasicInfo = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PokemonName = styled.h1`
  color: #ef5350;
  font-size: 2rem;
  margin: 0;
  text-align: center;
  text-transform: capitalize;
`;

const PokemonFlavorText = styled.p`
  font-size: 1rem;
  font-style: italic;
  padding: 0 0.5rem;
  text-align: center;
`;

const PokemonEvolution = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  color: #ef5350;
  font-weight: bold;
  margin-top: 2rem;
  text-align: center;
`;

function PokemonInfo({ resources }) {
  // eslint-disable-next-line no-unused-vars
  const [pokemon, setPokemon] = useState(pokemonMapper(resources));

  return (
    <MainWrapper>
      <InfoWrapper>
        <PokemonBasicInfo>
          <PokemonName>{pokemon.base_info.name}</PokemonName>
          <PokemonFlavorText>{`"${pokemon.optional_info.flavor_text}"`}
          </PokemonFlavorText>
          <PokemonCard name="" id={pokemon.base_info.id} size="large" />
          <hr />
          <PokemonFlavorText>Evolution Chain...</PokemonFlavorText>
          <PokemonEvolution>
            {pokemon.evolution_chain
              ? pokemon.evolution_chain.map(entry => (
                <PokemonCard
                  key={entry.name}
                  name={entry.name}
                  id={entry.id}
                  size="small"
                />
              ))
              : <PokemonFlavorText>UNKNOWN</PokemonFlavorText>}
          </PokemonEvolution>
        </PokemonBasicInfo>
        <PokemonStats pokemonData={pokemon} />
      </InfoWrapper>
      <StyledLink to={`/page/${getPagefromPokemonID(pokemon.base_info.id)}`}>Back to the list
      </StyledLink>
    </MainWrapper>
  );
}

export default PokemonInfo;
