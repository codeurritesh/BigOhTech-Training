import { Box, useTheme } from '@mui/material'
import React from 'react'
import "./style.css"
const banner = require('../../assest/banner.png');
const Home = () => {
  const theme=useTheme();
  return (
    <Box className='banner' sx={{backgroundColor:theme.palette.secondary.main}}>
        <img src={banner} alt="" className='banner-img'/>
    </Box>
  )
}

export default Home