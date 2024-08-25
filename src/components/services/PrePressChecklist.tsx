import React from "react"
import { Box, Grid, Typography } from "@mui/material"

export default function PrePressChecklist() {
  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        {/* Packages Explained */}
        <Typography variant="h2" color={"black"} sx={{ width: "100%", textAlign: "center", pt: "3rem", pb: "2rem" }}>Pre-Press Checklist:</Typography>

        <Grid container spacing={2} sx={{ pr: 4 }}>
          <Grid item md={2} >
            <Typography color={"red"} sx={{ fontSize: "1.5rem", textAlign: "right" }}>&#10004;</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h3">Sorted Apples</Typography>
            <Typography variant="body1" sx={{ pt: "1rem" }}>We will not sort or remove blemished or spoiled apples. Sorting your apples ensures a smooth pressing experience and safe cider product.</Typography>
          </Grid>
          <Grid item md={2} >
            <Typography color={"red"} sx={{ fontSize: "1.5rem", textAlign: "right" }}>&#10004;</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h3">Water Access</Typography>
            <Typography variant="body1" sx={{ pt: "1rem" }}>To press apples we need a water source preferably from a 3/4" culinary water spigot (normal garden hose size).</Typography>
          </Grid>
          <Grid item md={2} >
            <Typography color={"red"} sx={{ fontSize: "1.5rem", textAlign: "right" }}>&#10004;</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h3">Electrical Access</Typography>
            <Typography variant="body1" sx={{ pt: "1rem" }}>Grounded, standard outlet. Outdoor outlet is best for your convenience, but not required.</Typography>
          </Grid>
          <Grid item md={2} >
            <Typography color={"red"} sx={{ fontSize: "1.5rem", textAlign: "right" }}>&#10004;</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h3">Food-safe Containers</Typography>
            <Typography variant="body1" sx={{ pt: "1rem" }}>We recommend 1-gallon drink containers (milk jugs, etc) to store your cider in. You can also purchase these from us, new, for $1.50 each.</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}