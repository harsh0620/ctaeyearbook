import { Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Auth from "../Auth/Auth";
import { useAuth } from "../Context/authContext";
import Hero from "../Hero/Hero";
const Home = ({ signUp, setSignUp }) => {
  const { isLoggedIn, logout } = useAuth();
  // console.log(isLoggedIn);
  const [batches, setBatches] = useState([
    { label: "2018-2022", link: "/batch/2018-2022" },
    { label: "2019-2023", link: "/batch/2019-2023" },
  ]);
  return (
    <>
      {isLoggedIn ? (
        <div style={{ width: "100%" }}>
          <Hero title={"CTAE YEARBOOK"} subTitle={"Relive your memories from your college"} />
          <Container
            maxWidth="lg"
            sx={{
              mt: 10,
            }}
          >
            {batches?.map((data, key) => {
              return (
                <Paper
                  key={key}
                  variant="outlined"
                  sx={{
                    height: 60,
                    background: "black",
                    color: "white",
                    margin: 5,
                  }}
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
      ) : (
        <Auth signUp={signUp} setSignUp={setSignUp} />
      )}
    </>
  );
};

export default Home;
