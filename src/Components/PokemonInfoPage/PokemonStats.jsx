import styled from '@emotion/styled';

const MEDIA_QUERY_BP = [630, 430, 330];
const StatListWrapper = styled.ul`
  background-color: #e5e5e5;
  box-shadow: 3px 3px 4px #888;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 2rem;
  transform: rotate(1deg);

  @media (max-width: ${MEDIA_QUERY_BP[2]}px) {
    transform: rotate(0deg);
  }
`;

const StatListTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0.45rem 0 0 0;
  text-decoration: underline;

  @media (max-width: ${MEDIA_QUERY_BP[2]}px) {
    font-size: 1.1rem;
  }
`;

const StatBlock = styled.li`
  display: flex;
  font-size: 1.1rem;
  justify-content: space-between;
  list-style: none;
  text-transform: capitalize;

  @media (max-width: ${MEDIA_QUERY_BP[2]}px) {
    font-size: 1rem;
  }
`;

const StatValue = styled.span`
  text-align: end;
  font-weight: bold;
`;

function PokemonStatBlock({ stat, value }) {
  return (
    <StatBlock>
      <span>{stat}...</span><StatValue>...{value}</StatValue>
    </StatBlock>
  );
}

function PokemonStats({ pokemonData }) {
  return (
    <StatListWrapper>
      <StatListTitle>INFO</StatListTitle>
      <PokemonStatBlock stat="types" value={pokemonData.base_info.types} />
      <PokemonStatBlock stat="order" value={`N° ${pokemonData.base_info.id}`} />
      <PokemonStatBlock stat="height" value={`${pokemonData.base_info.height / 10}m`} />
      <PokemonStatBlock stat="weight" value={`${pokemonData.base_info.weight}lb`} />
      <hr />
      <StatListTitle>STATS</StatListTitle>
      {pokemonData.base_info.stats.map(
        ({ stat, value }) => <PokemonStatBlock key={stat} stat={stat} value={value} />
      )}
      <hr />
      <StatListTitle>BONUS STATS</StatListTitle>
      <PokemonStatBlock stat="capture rate" value={`${pokemonData.optional_info.capture_rate}%`} />
      <PokemonStatBlock stat="base exp" value={`${pokemonData.base_info.base_experience}xp`} />
      <PokemonStatBlock stat="growth rate" value={pokemonData.optional_info.growth_rate.name} />
      <PokemonStatBlock stat="base happiness" value={pokemonData.optional_info.base_happiness} />
    </StatListWrapper>
  );
}

export default PokemonStats;
