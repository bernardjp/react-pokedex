const BASE_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';
const BASE_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
const BASE_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

export const PAGE_LIMIT = 20;
const getPageOffset = page => (page - 1) * PAGE_LIMIT;

const getResource = async resourceURL => {
  try {
    const resource = await fetch(resourceURL);
    return resource.json();
  } catch (error) {
    throw new Error(`API Error: ${error}`);
  }
};

const getOptionalResource = async resourceURL => {
  const resource = await fetch(resourceURL);
  if (resource.ok) {
    return resource.json();
  }
  return null;
};

const getSpriteURL = async resourceURL => {
  const resource = await fetch(resourceURL);
  if (resource.ok) {
    return resourceURL;
  }
  return '';
};

const getPokemonResources = async id => {
  const pokemonData = await getResource(`${BASE_POKEMON_URL}${id}`);
  const speciesData = await getOptionalResource(`${BASE_SPECIES_URL}${id}`);
  const evolutionData = speciesData && await getResource(speciesData.evolution_chain.url);
  return { pokemonData, speciesData, evolutionData };
};

export const pokeapi = {
  getPageResources: page => getResource(`${BASE_POKEMON_URL}?offset=${getPageOffset(page)}&limit=${PAGE_LIMIT}`),
  getPokemonResources,
  getPokemonSpriteURL: id => getSpriteURL(`${BASE_SPRITE_URL}${id}.png`)
};
