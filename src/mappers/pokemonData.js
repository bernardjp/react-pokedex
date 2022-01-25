function getEvolutionChain(data) {
  const pokemonData = data[0];
  const evoStep = {
    name: pokemonData.species.name,
    id: getIDfromURL(pokemonData.species.url)
  };

  if (pokemonData.evolves_to.length === 0) {
    return evoStep;
  }
  return [evoStep, getEvolutionChain(pokemonData.evolves_to)].flat();
}

export function getIDfromURL(url) {
  const urlArray = url.split('/');
  return urlArray[urlArray.length - 2];
}

export function pokemonMapper(dataFromAPI) {
  const { pokemonData, speciesData, evolutionData } = dataFromAPI;
  const data = {
    base_info: {
      base_experience: pokemonData.base_experience,
      height: pokemonData.height,
      id: pokemonData.id,
      name: pokemonData.name,
      stats: pokemonData.stats.map(entry => ({ stat: entry.stat.name.replace('-', ' '), value: entry.base_stat })),
      types: pokemonData.types.map(entry => entry.type.name).toString().replaceAll(',', ', '),
      weight: pokemonData.weight
    },
    evolution_chain: null,
    optional_info: {
      flavor_text: "We still don't know a lot about this Pokemon",
      capture_rate: 'unknown',
      growth_rate: 'unknown',
      base_happiness: 'unknown'
    }
  };

  if (speciesData) {
    data.optional_info = {
      flavor_text: speciesData.flavor_text_entries[0].flavor_text,
      capture_rate: speciesData.capture_rate,
      growth_rate: speciesData.growth_rate.name,
      base_happiness: speciesData.base_happiness
    };
    data.evolution_chain = getEvolutionChain([evolutionData.chain]);
  }
  return data;
}
