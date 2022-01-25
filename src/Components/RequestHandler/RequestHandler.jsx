import styled from '@emotion/styled';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './Loading';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;
`;

function RequestHandler({ isLoading, data, error, Component }) {
  return (
    <>
      {isLoading && <Wrapper><LoadingSpinner /></Wrapper>}
      {error && <Wrapper><ErrorMessage /></Wrapper>}
      {data && <Component resources={data} />}
    </>
  );
}

export default RequestHandler;
