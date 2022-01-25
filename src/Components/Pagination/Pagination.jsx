import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import PaginationButton from './PaginationButton';
import { paginationCalc, firstPage } from '../../utils/paginationCalc';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PaginationPlaceholder = styled.div`
  color: #ef5350;
  margin: 0 0.3rem;
`;

Pagination.prototype = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

function Pagination({ currentPage, lastPage, setPage }) {
  const [pageList, setPageList] = useState(paginationCalc(currentPage, lastPage));

  useEffect(() => {
    setPageList(paginationCalc(currentPage, lastPage));
  }, [currentPage, lastPage]);

  return (
    <Wrapper>
      <PaginationButton
        text="<"
        toPage={currentPage - 1}
        isDisabled={currentPage === firstPage}
        clickHandler={() => setPage(prevPage => prevPage - 1)}
      />
      <PaginationButton
        text={firstPage}
        toPage={firstPage}
        isActive={currentPage === firstPage}
        clickHandler={() => setPage(firstPage)}
      />
      {pageList.map((page, index) => {
        if (page) {
          return (
            <PaginationButton
              key={page}
              text={page}
              toPage={page}
              isActive={currentPage === page}
              clickHandler={() => setPage(page)}
            />
          );
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          <PaginationPlaceholder key={index * new Date().getTime()}>
            ...
          </PaginationPlaceholder>
        );
      })}
      <PaginationButton
        text={lastPage}
        toPage={lastPage}
        isActive={currentPage === lastPage}
        clickHandler={() => setPage(lastPage)}
      />
      <PaginationButton
        text=">"
        toPage={currentPage + 1}
        isDisabled={currentPage === lastPage}
        clickHandler={() => setPage(prevPage => prevPage + 1)}
      />
    </Wrapper>
  );
}

export default Pagination;
