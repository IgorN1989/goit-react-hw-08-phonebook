import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container
      component="main"
      sx={{
        minHeight: 'calc(100vh - 48px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background:
          'linear-gradient(90deg, rgba(21,101,192,1) 33%, rgba(25,118,210,1) 66%, rgba(66,165,245,1) 100%)',
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        sx={{
          color: 'white',
          fontWeight: 700,
          fontSize: { xs: 48, sm: 72, md: 96, lg: 128 },
        }}
      >
        Phonebook
      </Typography>
    </Container>
  );
}
