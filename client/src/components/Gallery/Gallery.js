import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/authContext";
const Gallery = ({ pic }) => {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card sx={{ maxWidth: 345, margin: 3 }}>
        <CardActionArea>
          <CardMedia component="img" height="260" image={pic.selectedFile || "/profile.png"} alt="pics" />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Gallery;
