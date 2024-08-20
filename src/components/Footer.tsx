import React from 'react'
import { Paper, Button, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Paper sx={{ height: "3rem", backgroundColor: "#242523", position: "relative", m: 0, pt: 1, alignContent: "center", display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Typography variant='body1' color={"gray"} fontFamily={"sans-serif"}>&copy; Copyright 2024 Olsen's Hometown Cider | </Typography>
      <Button variant='text' size='small' sx={{ backgroundColor: "#242523", color: "gray", fontFamily: "sans-serif", height: "1rem", mt: "5px", '&:hover': { backgroundColor: "#242523", color: "#gray" } }}>Food Safety</Button>
    </Paper>
  )
}