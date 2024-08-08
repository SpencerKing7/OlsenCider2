import React from 'react'
import { Paper, Button, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Paper sx={{ height: "2rem", backgroundColor: "#242523", position: "relative", m: 0, p: 0, alignContent: "center", display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Typography variant='body1' color={"white"} fontFamily={"sans-serif"}>Copyright 2024 | </Typography>
      <Button variant='contained' sx={{ backgroundColor: "#242523", color: "white", fontFamily: "sans-serif" }}>Food Safety</Button>
    </Paper>
  )
}