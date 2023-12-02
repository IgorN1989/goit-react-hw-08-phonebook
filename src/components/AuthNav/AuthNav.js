import { Nav, NavElement } from './AuthNav.styled.jsx';

export const AuthNav = () => {
  return (
    <Nav>
      <NavElement to="/register">Register</NavElement>
      <NavElement to="/login">Log In</NavElement>
    </Nav>
  );
};

// <div>
//       <NavLink className={css.link} to="/register">
//         Register
//       </NavLink>
//       <NavLink className={css.link} to="/login">
//         Log In
//       </NavLink>
//     </div>
