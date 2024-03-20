import React from 'react';
import { styles } from '../styles/index'; // Import the styles object
import { Box } from '@mui/material';
const Index = () => {
  return (
    <Box component={'section'} style={styles.mainContainer}>
      <img
        src='/images/banner.png'
        alt="bannerImage"
        style={styles.image}
      />
    </Box>
  );
};

export default Index;
