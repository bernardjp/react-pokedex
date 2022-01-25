import { useEffect, useReducer } from 'react';

const initialState = { loading: false, data: null, error: null };

const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOADING':
      return { ...state, loading: true, data: null, error: null };
    case 'SUCCESS':
      return { ...state, loading: false, data: payload, error: null };
    case 'FAILURE':
      return { ...state, loading: false, data: null, error: true };
    default:
      return state;
  }
};

const useFetch = (fetchResource, param) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(async () => {
    dispatch({ type: 'LOADING' });
    try {
      const resource = await fetchResource(param);
      dispatch({ type: 'SUCCESS', payload: resource });
    } catch (error) {
      dispatch({ type: 'FAILURE', payload: error });
    }
  }, [fetchResource, param]);

  return state;
};

export default useFetch;
