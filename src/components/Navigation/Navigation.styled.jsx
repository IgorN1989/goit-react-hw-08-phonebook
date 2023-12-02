import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavElement = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 12px;
  color: #1976d2;
  font-weight: 500;
  font-size: 16px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    font-size 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &.active {
    color: #1565c0;
    font-size: 20px;
    font-weight: 700;
  }

  &:hover {
    color: #42a5f5;
  }

  @media only screen and (max-width: 599px) {
    font-size: 24px;
    &.active {
      font-size: 36px;
    }

    p {
      font-size: 0;
    }
  }
`;
