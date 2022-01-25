import styled from '@emotion/styled';
import Navbar from './Navbar';

const MEDIA_QUERY_BP = [624, 424, 324];

const Background = styled.header`
  background-color: #ef5350;
  color: white;
  display: flex;
  height: 3.3rem;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 70vw;

  @media (max-width: ${MEDIA_QUERY_BP[0]}px) {
    justify-content: end;
  }
  @media (max-width: ${MEDIA_QUERY_BP[1]}px) {
    justify-content: center;
  }
`;

const LogoLink = styled.a`
  @media (max-width: ${MEDIA_QUERY_BP[0]}px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  height: 2.8rem;
`;

function Header() {
  return (
    <Background>
      <Wrapper>
        <LogoLink href="https://www.pokemon.com/us/" target="_blank" rel="noreferrer">
          <LogoImg
            src="https://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG3.png"
            alt="pokemon-logo"
          />
        </LogoLink>
        <Navbar />
      </Wrapper>
    </Background>
  );
}

export default Header;
