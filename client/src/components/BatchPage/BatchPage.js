import { Container, Grid } from "@mui/material";
import React from "react";
import Hero from "../Hero/Hero";
import PersonCard from "../PersonCard/PersonCard";

const BatchPage = () => {
  return (
    <div>
      <Hero title={`Batch 2018-2022`} />
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
    </div>
  );
};

export default BatchPage;
