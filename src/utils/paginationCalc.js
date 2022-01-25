// eslint-disable-next-line no-unused-vars
import { PAGE_LIMIT } from './fetchAPI';

export const firstPage = 1;
export const paginationCalc = (currentPage, lastPage) => {
  const page = Number(currentPage);

  if (page >= firstPage + 4 && page <= lastPage - 4) {
    return ([null, page - 1, page, page + 1, null]);
  }

  if (page < firstPage + 4 && page >= firstPage) {
    return ([firstPage + 1, firstPage + 2, firstPage + 3, firstPage + 4, null]);
  }

  if (page > lastPage - 4 && page <= lastPage) {
    return ([null, lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1]);
  }

  return [null];
};

export const getPagefromPokemonID = id => {
  const adjustedID = id > 10000 ? id - 9102 : id;
  return Math.ceil(adjustedID / PAGE_LIMIT);
};
