import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import useFetch from '../../Hooks/useFetch';
import { pokeapi, PAGE_LIMIT } from '../../utils/fetchAPI';
import PokemonList from './PokemonList';
import Pagination from '../Pagination/Pagination';
import RequestHandler from '../RequestHandler/RequestHandler';

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function PokemonListPage() {
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(page));
  const [lastPage, setLastPage] = useState(null);
  const { loading, data, error } = useFetch(pokeapi.getPageResources, currentPage);

  useEffect(() => {
    if (data && lastPage === null) {
      setLastPage(Math.ceil(data.count / PAGE_LIMIT));
    }
  }, [data]);

  useEffect(() => {
    setCurrentPage(Number(page));
  }, [page]);

  return (
    <Wrapper>
      <RequestHandler
        isLoading={loading}
        data={data}
        error={error}
        Component={PokemonList}
      />
      {data && (
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        setPage={setCurrentPage}
      />
      )}
    </Wrapper>
  );
}

export default PokemonListPage;
