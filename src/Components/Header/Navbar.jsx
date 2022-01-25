// import { useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Navlink from './Navlink';

const links = [
  { text: 'Home', route: '/' },
  { text: 'Explore', route: '/page/1' },
  { text: 'About', route: '/about' },
  { text: 'Contact', route: '/contact' }
];

const Wrapper = styled.nav`
  display: flex;
  height: 100%;
  justify-content: space-around;
`;

function Navbar() {
  // const location = useLocation().pathname;
  // const [btnActive, setActive] = useState(links.map(link => link.route === location));
  // eslint-disable-next-line max-len
  // const [btnActive, setActive] = useState(links.map(link => checkLocation(link.route, location)));

  // useEffect(() => {
  //   // const regex = new RegExp();
  //   // console.log(btnActive);
  //   // setActive(links.map(link => link.route === location));
  // }, [location]);

  return (
    <Wrapper>
      {links.map(({ text, route }) => (
        <Navlink
          key={text}
          text={text}
          path={route}
          // activeHandler={() => setActive(btnActive.map((btn, i) => i === index))}
          // active={btnActive[index]}
        />
      ))}
    </Wrapper>
  );
}

export default Navbar;
