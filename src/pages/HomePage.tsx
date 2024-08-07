import { Typography, Box } from "@mui/material"
import React from "react"
import orchard from "../img/apple-orchard-illustration-olsenscider.com.jpeg"
import whiteApples from "../img/apple-leaf-tile-olsenscider.com.jpeg"
import orchardWaterColor from "../img/apple-orchard-watercolor-olsenscider.com.jpeg"
import NavBar from "../components/Navbar"

export default function HomePage() {
  return (
    <>
      <Box>
        <Typography variant="h1" sx={{ zIndex: 100, position: "absolute", color: "white", textAlign: "center", width: "100%", mt: "6rem" }}>Olsens Cider</Typography>

        <Box sx={{
          backgroundImage: `url(${orchard})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "385px",
          minHeight: "20rem"
        }}>
          <NavBar />
        </Box>

        <Box sx={{
          backgroundImage: `url(${whiteApples})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          height: "385px",
          minHeight: "20rem"
        }}>
          <p>Hey</p>
        </Box>

        <Box sx={{
          backgroundImage: `url(${orchardWaterColor})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "385px",
          minHeight: "20rem"
        }}>

        </Box>
      </Box>
    </>
  )
}