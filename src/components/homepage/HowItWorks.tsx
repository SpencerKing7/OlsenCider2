import React from 'react'
import { Box, Typography, Divider, Grid } from '@mui/material'
import whiteApples from "../../img/apple-leaf-tile-olsenscider.com.jpeg"


export default function HowItWorks() {
  return (
    <>


      {/* Background */}
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(160, 35, 34, 0.7), rgba(160, 35, 34, 0.7)), url(${whiteApples})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto",
        minHeight: "20rem",
        width: '100%',
        position: 'relative'
      }}>
        {/* Main */}
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Divider color={"white"} />
          <Typography variant="h2" sx={{ position: "absolute", color: "primary.main", textAlign: "center", width: "100%", mt: "4rem" }}>
            How It Works
          </Typography>
          <Divider />
        </Box>
        {/* <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}> */}
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Typography color={"primary"} variant='h3' sx={{ mt: "9rem", textAlign: "center" }}>You Book A Time</Typography>
            <Typography color={"primary"} variant='body1' sx={{ textAlign: "center" }}>Use our online booking tool to pick your service day(s) and time. It's easy!</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography color={"primary"} variant='h3' sx={{ mt: "9rem", textAlign: "center" }}>We Show Up</Typography>
            <Typography color={"primary"} variant='body1' sx={{ textAlign: "center" }}>We show up to your home with our proprietary mobile apple pressing system</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography color={"primary"} variant='h3' sx={{ mt: "9rem", textAlign: "center" }}>We Process Your Apples</Typography>
            <Typography color={"primary"} variant='body1' sx={{ textAlign: "center" }}>We run your pre-sorted apples through our apple press and filter and settle the cider to reduce sediment.</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography color={"primary"} variant='h3' sx={{ mt: "9rem", textAlign: "center" }}>We Bottle The Cider</Typography>
            <Typography color={"primary"} variant='body1' sx={{ textAlign: "center" }}>We bottle the fresh cider in your desired food-safe containers (or our own bottles for an extra fee).</Typography>
          </Grid>
        </Grid>
        {/* </Container> */}
      </Box>
    </>

  )
}