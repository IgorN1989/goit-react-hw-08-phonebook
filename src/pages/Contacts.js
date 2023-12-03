import { useSelector } from 'react-redux';

import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Typography, LinearProgress, Box } from '@mui/material';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container
      component="main"
      sx={{
        minHeight: 'calc(100vh - 48px)',
        display: 'flex',
        flexDirection: 'column',
        pt: 8,
      }}
    >
      {isLoading && (
        <LinearProgress
          sx={{ height: '8px', position: 'fixed', top: 0, left: 0 }}
        />
      )}
      {error ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            color="#f44336"
            component="h3"
            variant="h5"
            fontWeight={700}
          >
            {error}! Please reload this page!
          </Typography>
        </Box>
      ) : (
        <div>
          <Filter />
          <ContactList />
        </div>
      )}
    </Container>
  );
}
