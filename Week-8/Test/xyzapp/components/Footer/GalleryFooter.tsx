import React from 'react';
import { styles } from './styles';
import { Box } from '@mui/material';
import { headers } from 'next/headers';

const Footer = () => {
  return (
    <Box component="footer" sx={styles.footer}>
      @Image-Gallery
    </Box>
  );
};

export default Footer;
