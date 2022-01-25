import styled from '@emotion/styled';
import { BasePageComponents } from './HomePage';
import trainerCompImg from '../../images/trainer_comp2.png';
import linkedinLogo from '../../images/linkedinLogo2.png';
import githubLogo from '../../images/githubLogo2.png';

const { PageWrapper, TextSection, Title, Description, PokemonImg } = BasePageComponents;

const LinksContainer = styled.nav`
  margin: 2rem 0;
  display: flex;
  justify-content: space-around; 

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const LinkLogo = styled.img`
  margin-right: 1rem;
  width: 2rem;
`;

// Comparte estilos con el StyledLink de HomePage.
const StyledLink = styled.a`
  align-items: center;
  background-color: inherit;
  border-radius: 1rem;
  border: 1px #ef5350 solid;
  color: #ef5350;
  display: flex;
  font-size: 1.1rem;
  margin: 0.75rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  text-decoration: none;
  transition: 0.2s;

  :hover {
    background-color: #ef5350;
    color: white;
    transform: scale(1.1);
  }

  :hover img {
    filter: brightness(0) invert(1);
  }
  
  :active {
    background-color: #e94141;
    color: white;
  }
`;

function ContactPage() {
  return (
    <PageWrapper>
      <TextSection>
        <Title>Contact me</Title>
        <Description theme={{ fontWeight: 'normal' }}>
          Greets! My name is <strong>Juan Pablo Bernard</strong>, a Web Dev in the making,
          and you can find more about me on the links down below.
        </Description>
        <LinksContainer>
          <StyledLink href="https://www.linkedin.com/in/juan-pablo-bernard/" target="_blank" rel="noreferrer">
            <LinkLogo src={linkedinLogo} />
            LinkedIn
          </StyledLink>
          <StyledLink href="https://github.com/bernardjp" target="_blank" rel="noreferrer">
            <LinkLogo src={githubLogo} />
            GitHub
          </StyledLink>
        </LinksContainer>
      </TextSection>
      <PokemonImg src={trainerCompImg} alt="trainerComp-img" />
    </PageWrapper>
  );
}

export default ContactPage;
