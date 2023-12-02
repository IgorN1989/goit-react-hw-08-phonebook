import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  Box,
  Button,
  Grid,
  TextField,
  Paper,
  Typography,
  Link,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        minHeight: 'calc(100vh - 48px)',
      }}
    >
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background:
            'linear-gradient(90deg, rgba(21,101,192,1) 33%, rgba(25,118,210,1) 66%, rgba(66,165,245,1) 100%)',
        }}
      >
        {' '}
        <Typography
          component="h1"
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: { xs: 500, lg: 700 },
            fontSize: { xs: 32, md: 64 },
          }}
        >
          Registration
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
            autoComplete="off"
          >
            <TextField
              margin="normal"
              id="name"
              label="Name"
              name="name"
              fullWidth
              autoFocus
              required
            />
            <TextField
              margin="normal"
              id="email"
              label="Email Address"
              name="email"
              fullWidth
              required
            />
            <TextField
              margin="normal"
              id="password"
              label="Password"
              name="password"
              fullWidth
              required
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
              Register
            </Button>
            <Box
              sx={{
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Link href="login" variant="body2">
                {'Have an account? Log In'}
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
