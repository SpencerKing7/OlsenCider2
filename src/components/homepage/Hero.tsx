import React from 'react'
import { Box, Typography, Paper, Button } from '@mui/material'
import orchard from "../../img/apple-orchard-illustration-olsenscider.com.jpeg"


export default function Hero() {
  return (
    <>
      {/* Text/Buttons */}
      <Box sx={{ zIndex: 1000 }}>
        <Typography variant="h1" sx={{ zIndex: 100, position: "absolute", color: "white", textAlign: "center", width: "100%", mt: "6rem" }}>Olsen's Hometown Cider</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", position: "absolute", mt: "11rem", width: "100%" }}>
          <Button variant='contained' sx={{ mr: "20px", backgroundColor: "#A02322", fontFamily: "sans-serif" }}>Book Service</Button>
          <Button variant='contained' sx={{ backgroundColor: "#69903C", fontFamily: "sans-serif" }}>Learn More</Button>
        </Box>
        <Typography variant="h6" sx={{ zIndex: 100, position: "absolute", color: "white", textAlign: "center", width: "100%", mt: "15rem", fontFamily: "sans-serif" }}>Homemade cider from YOUR apples</Typography>
      </Box>

      {/* Background */}
      <Box sx={{
        backgroundImage: `url(${orchard})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "385px",
        minHeight: "20rem",
        width: '100%',
        position: 'relative',
        zIndex: -100
      }}>
        <Paper sx={{ height: "100%", width: "100%", backgroundColor: "#242523", opacity: "35%" }} />
      </Box>
    </>

  )
}