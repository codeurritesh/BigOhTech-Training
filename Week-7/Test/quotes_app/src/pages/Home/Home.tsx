import { Box, useTheme } from '@mui/material'
import React from 'react'
import "./style.css"
const Home = () => {
  const theme=useTheme();
  return (
    <Box className='banner' sx={{backgroundColor:theme.palette.secondary.main}}>
        <img src="https://img.freepik.com/free-vector/decorative-brush-stroke-grunge-frame-banner-design_1055-13782.jpg?w=900&t=st=1709977094~exp=1709977694~hmac=09327fa7e621288a1c10755ba50b1dc2ce1d0e79ca35e6499ccfb8539ade6bb8" alt="" />
    </Box>
  )
}

export default Home