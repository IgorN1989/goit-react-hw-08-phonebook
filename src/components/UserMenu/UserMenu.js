import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Avatar, Box, Typography, IconButton } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography
        sx={{
          color: '#1976d2',
          fontWeight: 700,
          fontSize: 24,
        }}
      >
        {user.name}
      </Typography>
      <IconButton type="button" onClick={() => dispatch(logOut())}>
        <Avatar sx={{ bgcolor: '#1976d2', ':hover': { bgcolor: '#42a5f5' } }}>
          <ExitToAppOutlinedIcon />
        </Avatar>
      </IconButton>
    </Box>
  );
};
