import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const circleSize = 2.2;
const RoundButton = styled(Link)`
  align-items: center;
  border-radius: 50%;
  border: 1px #ef5350 solid;
  color: #ef5350;
  cursor: pointer;
  display: flex;
  font-size: 0.85rem;
  font-weight: bold;
  height: ${circleSize}rem;
  justify-content: center;
  margin: 0 0.05rem;
  text-decoration: none;
  transition: 0.2s;
  width: ${circleSize}rem;

  :hover {
    background-color: #ef5350;
    color: white;
  }

  :active {
    background-color: #d32b2b;
  }

  @media (max-width: 324px) {
    font-size: 0.75rem;
    height: ${circleSize * 0.8}rem;
    width: ${circleSize * 0.8}rem;
  }

  ${props => (props.theme.isDisabled && 'visibility: hidden;')}
  ${props => (props.theme.isActive && 'background-color: #d32b2b; color: white;')}
`;

PaginationButton.prototype = {
  clickHandler: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  isDisable: PropTypes.bool,
  toPage: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

function PaginationButton({ text, toPage, clickHandler, isActive, isDisabled = false }) {
  return (
    <RoundButton
      to={`/page/${toPage}`}
      value={text}
      onClick={clickHandler}
      theme={{ isActive, isDisabled }}
    >{text}
    </RoundButton>
  );
}

export default PaginationButton;
