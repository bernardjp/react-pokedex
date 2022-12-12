import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './Header/Header';
import { HomePage } from './BasePages/HomePage';
import AboutPage from './BasePages/AboutPage';
import ContactPage from './BasePages/ContactPage';
import PokemonListPage from './PokemonListPage/PokemonListPage';
import PokemonInfoPage from './PokemonInfoPage/PokemonInfoPage';
import Footer from './Footer';

const PageWrapper = styled.main`
  align-items: center;
  background-color: silver;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const MainContentWrapper = styled.article`
  display: flex;
  justify-content: center;
  width: 70vw;
`;

function App() {
  return (
    <PageWrapper>
      <Router>
        <Header />
        <MainContentWrapper>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/page/:page" exact>
              <PokemonListPage />
            </Route>
            <Route path="/pokemon/:id">
              <PokemonInfoPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </MainContentWrapper>
        <Footer />
      </Router>
    </PageWrapper>
  );
}

export default App;
