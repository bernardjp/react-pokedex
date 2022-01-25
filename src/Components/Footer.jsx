import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  bottom: 0;
  display: flex;
  color: #343434;
  font-size: 0.80rem;
  padding: 1.5rem 1rem 1.2rem 1rem;
  position: relative;
  text-align: center;
  font-style: italic;
`;

function Footer() {
  return (
    <StyledFooter>Pokémon and Pokémon character names are trademarks of Nintendo.</StyledFooter>
  );
}

export default Footer;
