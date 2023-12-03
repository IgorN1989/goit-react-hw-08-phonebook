import { useAuth } from 'hooks/useAuth';
import { Nav, NavElement } from './Navigation.styled';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';

// ================================================================

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavElement to="/">
        <HomeOutlinedIcon sx={{ fontSize: 'inherit', mr: 0.5 }} />
        <p>Home</p>
      </NavElement>
      {isLoggedIn && (
        <NavElement to="/contacts">
          <ImportContactsOutlinedIcon sx={{ fontSize: 'inherit', mr: 0.5 }} />
          <p>Contacts</p>
        </NavElement>
      )}
    </Nav>
  );
};
