import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  padding: 1rem;
  color: white;
  text-decoration: none;
  transition: 0.2s;

  :hover {
    background-color: #e94141;
  }

  @media (max-width: 324px) {
    font-size: 0.75rem;
    padding: 0.75rem;
  }
`;

// const StyledLink = styled(NavLink)`
//   padding: 1rem;
//   color: white;
//   text-decoration: none;
//   transition: 0.2s;

//   :hover {
//     background-color: #e94141;
//   }

//   :active {
//     background-color: #d32b2b;
//   }

//   ${props => (props.theme && 'background-color: #d32b2b;')}
// `;

Navlink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
  // activeHandler: PropTypes.func.isRequired,
  // active: PropTypes.bool.isRequired
};

// eslint-disable-next-line no-unused-vars
function Navlink({ text, path, activeHandler, active }) {
  return (
    <StyledLink
      to={path}
      exact={path === '/'}
      activeStyle={{ backgroundColor: '#d32b2b' }}
      // onClick={() => activeHandler()}
      // theme={active}
    >{text}
    </StyledLink>
  );
}

export default Navlink;
