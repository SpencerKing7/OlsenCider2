import React from "react"
import { Box } from "@mui/material"
import Hero from "../components/homepage/Hero"
import HowItWorks from "../components/homepage/HowItWorks"
import WhoAreOlsens from "../components/homepage/WhoAreOlsens"
import GotApples from "../components/homepage/GotApples"


export default function HomePage() {
  return (
    <>
      <Box>
        <Hero />
        <HowItWorks />
        <WhoAreOlsens />
        <GotApples />
      </Box>
    </>
  )
}