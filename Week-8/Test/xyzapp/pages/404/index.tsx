import React from 'react'
import { style } from './style'
import { Box } from '@mui/material'
const error404 = () => {
  return (
    <Box sx={style.errorContainer}><img src="https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg" alt="" style={style.errorContainerImg}/></Box>
  )
}

export default error404