import styled from 'styled-components';
import { Box, TextField } from '@mui/material';

export const FilterContainer = styled(Box)`
  padding: ${p => p.theme.spacing(2)} 0;
  font-size: 16px;
  border: 1px solid ${p => p.theme.colors.main};
  background-color: tomato;

  display: flex;
  align-items: center;
`;
export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  font-style: italic;
`;

export const FilterInput = styled.input`
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(4)};
  line-height: 1.25;
  border: 1px solid ${p => p.theme.colors.main};
  border-radius: ${p => p.theme.radius};
`;
