import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import React from "react";

const Gallery = ({ photos }) => {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card sx={{ maxWidth: 345, margin: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="260"
            image="/profile.png"
            alt="pics"
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Gallery;
