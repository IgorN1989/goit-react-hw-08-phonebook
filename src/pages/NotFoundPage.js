// import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage.styled';
// import { Link } from 'react-router-dom';

// export default function NotFoundPage() {
//   return (
//     <ErrorMessage>
//       Page not found! Please go to&nbsp;
//       <Link to="/">
//         <span style={{ color: 'rgb(1, 180, 228)' }}>Home Page</span>
//       </Link>
//     </ErrorMessage>
//   );
// }

import { Container, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

export default function NotFoundPage() {
  return (
    <Container
      component="main"
      sx={{
        color: 'white',
        minHeight: 'calc(100vh - 48px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background:
          'linear-gradient(90deg, rgba(21,101,192,1) 33%, rgba(25,118,210,1) 66%, rgba(66,165,245,1) 100%)',
      }}
    >
      <Avatar
        sx={{
          width: { xs: 48, sm: 64, md: 80, lg: 96 },
          height: { xs: 48, sm: 64, md: 80, lg: 96 },
          m: 1,
          bgcolor: 'white',
        }}
      >
        <ReportGmailerrorredOutlinedIcon
          sx={{
            color: '#f44336',
            fontSize: { xs: 48, sm: 64, md: 80, lg: 96 },
          }}
        />
      </Avatar>
      <Typography
        component="h1"
        variant="h2"
        sx={{
          fontWeight: 700,
          fontSize: { xs: 32, sm: 48, md: 64, lg: 80 },
        }}
      >
        Page not found!
      </Typography>
    </Container>
  );
}
