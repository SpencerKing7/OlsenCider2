import React from 'react'
import { Box, Typography, Paper, Button } from '@mui/material'
import orchardWaterColor from "../../img/apple-orchard-watercolor-olsenscider.com.jpeg"


export default function WhoAreOlsens() {
  return (
    <>
      {/* Text/Buttons */}
      <Box sx={{ zIndex: 1000 }}>
        <Typography variant="h1" sx={{ zIndex: 100, position: "absolute", color: "primary", textAlign: "center", width: "100%", mt: "6rem" }}>Who are the Olsens</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", position: "absolute", mt: "11rem", width: "100%" }}>
          <Button variant='contained' sx={{ backgroundColor: "#69903C", fontFamily: "sans-serif" }}>Learn More</Button>
        </Box>
      </Box>

      {/* Background */}
      <Box sx={{
        backgroundImage: `url(${orchardWaterColor})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "385px",
        minHeight: "20rem",
        width: '100%',
        position: 'relative',
        zIndex: -100
      }}>
        <Paper sx={{ height: "100%", width: "100%", backgroundColor: "#FFFFFF", opacity: "35%" }} />
      </Box>
    </>

  )
}