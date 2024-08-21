import React from 'react'
import { Box, Typography } from '@mui/material'
import orchard from "../../img/apple-orchard-illustration-olsenscider.com.jpeg"


export default function Title() {
  return (
    <>
      {/* Background */}
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(36, 37, 35, 0.3), rgba(36, 37, 35, 0.3)), url(${orchard})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "300px",
        width: '100%',
        position: 'relative'
      }}>
        {/* Text/Buttons */}
        <Box>
          <Typography variant="h1" sx={{ zIndex: 100, position: "absolute", color: "white", textAlign: "center", width: "100%", mt: "8rem" }}>About Olsen's Hometown Cider</Typography>
        </Box>
      </Box>
    </>
  )
}