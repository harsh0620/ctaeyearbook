import React from "react";
import Hero from "../Hero/Hero";
import PersonCard from "../PersonCard/PersonCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid } from "@mui/material";
import Gallery from "../Gallery/Gallery";

const BatchPage = () => {
  const [flag, setFlag] = React.useState(1);
  return (
    <div>
      <Hero title={`Batch 2018-2022`} />
      <Container maxWidth="lg">
        <Grid item xs={12} md={6} m={3}>
          <Grid item xs={12} md={6} lg={6} m={2}>
            <Card
              onClick={() => setFlag(1)}
              sx={
                flag === 1
                  ? { background: "#1976d2", color: "white" }
                  : { color: "#1976d2", background: "white" }
              }
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    BatchMates
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6} m={2}>
            <Card
              onClick={() => setFlag(2)}
              sx={
                flag === 2
                  ? { background: "#1976d2", color: "white" }
                  : { color: "#1976d2", background: "white" }
              }
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gallery
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        {flag === 1 ? (
          <Container
            maxWidth="lg"
            sx={{ display: { md: "flex" }, flexDirection: "row" }}
          >
            <Grid item container alignItems="stretch">
              <PersonCard />
              <PersonCard />
              <PersonCard />
              <PersonCard />
              <PersonCard />
              <PersonCard />
            </Grid>
          </Container>
        ) : (
          <Container
            maxWidth="lg"
            sx={{ display: { md: "flex" }, flexDirection: "row" }}
          >
            <Grid item container alignItems="stretch">
              <Gallery />
              <Gallery />
              <Gallery />
              <Gallery />
            </Grid>
          </Container>
        )}
      </Container>
    </div>
  );
};

export default BatchPage;
