import styled from '@emotion/styled';

const ErrorImage = styled.img`
  height: 200px;
  padding: 2rem;
`;

const Message = styled.span`
  font-family: 'Architects Daughter', cursive;
  text-align: center;
`;

function ErrorMessage() {
  return (
    <>
      <ErrorImage src="https://pngimg.com/uploads/pokemon/pokemon_PNG110.png" alt="sad-pokemon" />
      <Message>Error retrieving the information from the Database. Try again later.</Message>
    </>
  );
}

export default ErrorMessage;
