import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

const cardData = {
  name: "Name Surname",
  quote: " You can't move forward without saying goodbye to the past.",
  instaLink: "https://instagram.com",
  linkedinLink: "https://linkedin.com",
  emailLink: "https://email.com",
};
export default function PersonCard() {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card sx={{ maxWidth: 345, margin: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="260"
            image="/profile.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardData.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardData.quote}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button size="small" color="primary" href={cardData.instaLink}>
            <InstagramIcon />
          </Button>
          <Button size="small" color="primary" href={cardData.linkedinLink}>
            <LinkedInIcon />
          </Button>
          <Button size="small" color="primary" href={cardData.emailLink}>
            <EmailIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
