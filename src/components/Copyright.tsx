import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'living, '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
