/* eslint-disable react/no-unescaped-entities */
import styled from '@emotion/styled';
import { BasePageComponents } from './HomePage';
import trainerImg from '../../images/trainer_small4.png';

const { PageWrapper, TextSection, Title, Description, PokemonImg } = BasePageComponents;

const StyledAnchor = styled.a`
  color: #ef5350;
  font-weight: bold:
`;

function AboutPage() {
  return (
    <PageWrapper>
      <TextSection>
        <Title>About this project</Title>
        <Description theme={{ fontWeight: 'bold' }}>
          This simple project is an exercise of the introductory course to React
          provided by "r/Argentina Programa".
        </Description>
        <Description theme={{ fontWeight: 'normal' }}>
          The purpose of the exercise was to encompass all basics concepts approached by the
          course: functional components, state management through useState and useReducer hooks,
          routing with react-router, useEffect and API requests, CSS-in-JS through Emotion's
          Styled Components, among others concepts.
        </Description>
        <Description theme={{ fontWeight: 'normal' }}>
          {'The RESTful API serving this site is '}
          <StyledAnchor href="https://pokeapi.co/" target="_blank" rel="noreferrer">
            Pokeapi.co,
          </StyledAnchor> which page also served as a base design concept.
        </Description>
        <Description theme={{ fontWeight: 'normal' }}>
          {'Visit '}
          <StyledAnchor href="https://argentinaprograma.com/" target="_blank" rel="noreferrer">
            r/Argentina Programa
          </StyledAnchor> to access the ongoing course for free.
        </Description>
      </TextSection>
      <PokemonImg src={trainerImg} alt="trainer-img" />
    </PageWrapper>
  );
}

export default AboutPage;
