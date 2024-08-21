import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import jessKylerPress from "../../img/kyler-jess-press-olsenscider.com.jpg"

export default function WhoAreWe() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          height: "500px"
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={5} sx={{ justifyContent: "center", display: "flex", mt: 10 }}>
            <Box component={"img"} src={jessKylerPress}
              alt="Jess and Kyler with the press"
              sx={{ width: "65%", height: "auto" }}
            />
          </Grid>
          <Grid item md={7} sx={{ mt: 10, pr: 5 }}>
            <Typography variant="h2" sx={{ color: "brown" }}>Who are the "Olsens" in Olsen's Hometown Cider?</Typography>
            <br /><Typography variant="body1" >Olsen's Hometown Cider was founded by Kyler and Jessica Olsen (that’s us!). We were both raised in small towns here in Utah and enjoyed pressing apple cider as a fall family tradition. We both attended Utah State University (go Aggies!) and are happy to be living in the beautiful Cache Valley.</Typography>
            <br /><Typography variant="body1" >We started this business to bring our family traditions of pressing apple cider to other members of the Cache Valley community. While in college, Kyler built a cider press for his parents as a Christmas gift, and it quickly became a family passion. Our current cider press was custom built by Kyler and is ready to turn your apples into a delightful, autumn treat. We are excited to bring one of our favorite fall traditions to you and your family!</Typography>
            <br /><Typography variant="body1" >-Kyler and Jessica Olsen</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}