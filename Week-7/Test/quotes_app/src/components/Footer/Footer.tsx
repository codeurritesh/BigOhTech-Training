// Footer.js
import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { ThemeContext } from '../../ThemeContext/themeContext';

const Footer = () => {
  const theme = useTheme();
  const themeContext=useContext(ThemeContext);
  const toggleTheme = () => {
    themeContext?.setDarkMode(!themeContext.darkMode)
};
  return (
    <footer className='main-footer' style={{ backgroundColor: theme.palette.primary.main, padding: '20px', textAlign: 'center', position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
      <Typography variant="body2" color="white">
        All rights reserved. Quotes-app © 2024.
      </Typography>
      <Button variant="outlined" onClick={toggleTheme} style={{ color: 'white', borderColor: 'white', marginTop: '10px' }}>
        Toggle Theme
      </Button>
    </footer>
  );
};

export default Footer;
