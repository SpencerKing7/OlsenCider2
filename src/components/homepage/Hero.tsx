import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import orchard from "../../img/apple-orchard-illustration-olsenscider.com.jpeg"


export default function Hero() {
  return (
    <>


      {/* Background */}
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(36, 37, 35, 0.3), rgba(36, 37, 35, 0.3)), url(${orchard})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "385px",
        width: '100%',
        position: 'relative'
      }}>
        {/* Text/Buttons */}
        <Box>
          <Typography variant="h1" sx={{ zIndex: 100, position: "absolute", color: "white", textAlign: "center", width: "100%", mt: "6rem" }}>Olsen's Hometown Cider</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", position: "absolute", mt: "11rem", width: "100%" }}>
            <Button variant='contained' sx={{ mr: "20px", backgroundColor: "#A02322", fontFamily: "sans-serif", color: "#ffffff", '&:hover': { backgroundColor: "#881F1D", color: "#ffffff" } }}>Book Service</Button>
            <Button variant='contained' sx={{ backgroundColor: "#69903C", fontFamily: "sans-serif", color: "#ffffff", '&:hover': { backgroundColor: "#5A7A33", color: "#ffffff" } }}>Learn More</Button>
          </Box>
          <Typography variant="h6" sx={{ zIndex: 100, position: "absolute", color: "white", textAlign: "center", width: "100%", mt: "15rem", fontFamily: "sans-serif" }}>Homemade cider from YOUR apples</Typography>
        </Box>
      </Box>
    </>

  )
}