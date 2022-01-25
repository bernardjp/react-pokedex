import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { pokeapi } from '../../utils/fetchAPI';
import RequestHandler from '../RequestHandler/RequestHandler';
import PokemonInfo from './PokemonInfo';

function PokemonInfoPage() {
  const { id } = useParams();
  const { loading, data, error } = useFetch(pokeapi.getPokemonResources, id);

  return (
    <>
      <RequestHandler
        isLoading={loading}
        data={data}
        error={error}
        Component={PokemonInfo}
      />
    </>
  );
}

export default PokemonInfoPage;
