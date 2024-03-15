import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Avatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/face-img.jpg"
        sx={{ width: 150, height: 150 }}
      />
    </Stack>
  );
}