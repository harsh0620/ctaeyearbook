import { Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Hero from "../Hero/Hero";
const Home = () => {
  const [batches, setBatches] = useState([
    { label: "2018-2022", link: "/batch/2022" },
    { label: "2019-2023", link: "/batch/2023" },
  ]);
  return (
    <div>
      <Hero
        title={"CTAE YEARBOOK"}
        subTitle={"Relive your memories from your college"}
      />
      <Container
        maxWidth="lg"
        sx={{
          mt: 10,
        }}
      >
        {batches?.map((data, key) => {
          return (
            <Paper
              variant="outlined"
              sx={{
                height: 60,
                background: "black",
                color: "white",
                margin: 5,
              }}
              key={key}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href={data.link}
                sx={{
                  mr: 2,
                  display: { md: "flex", lg: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  textAlign: "center",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                {data.label}
              </Typography>
            </Paper>
          );
        })}
      </Container>
    </div>
  );
};

export default Home;
