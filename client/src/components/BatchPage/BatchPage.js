import React, { useEffect, useImperativeHandle, useState } from "react";
import Hero from "../Hero/Hero";
import PersonCard from "../PersonCard/PersonCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid } from "@mui/material";
import Gallery from "../Gallery/Gallery";
import axios from "axios";
import { useAuth } from "../Context/authContext";
import { useLocation } from "react-router-dom";

const BatchPage = () => {
  const [flag, setFlag] = React.useState(1);
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [batchPics, setBatchPics] = useState([]);
  const location = useLocation();
  // console.log(location.pathname);
  const batch = location.pathname.split("/")[2];
  useEffect(() => {
    if (!user) {
      return;
    }
    const fetchPics = async () => {
      try {
        const res = await axios.get(`/user/batch_pics/${batch}`);
        console.log(res);
        if (res) {
          setBatchPics(res.data?.data?.batchPics);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchPics();
  }, [user]);

  useEffect(() => {
    if (!user) {
      return;
    }
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`/user/getUsers/${batch}`);
        if (res) {
          console.log(res);
          setUsers(res.data?.data?.users);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [user]);
  return (
    <div>
      <Hero title={`Batch 2018-2022`} />
      <Container maxWidth="lg">
        <Grid item xs={12} md={6} m={3}>
          <Grid item xs={12} md={6} lg={6} m={2}>
            <Card
              onClick={() => setFlag(1)}
              sx={flag === 1 ? { background: "#1976d2", color: "white" } : { color: "#1976d2", background: "white" }}
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
              sx={flag === 2 ? { background: "#1976d2", color: "white" } : { color: "#1976d2", background: "white" }}
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
          <Container maxWidth="lg" sx={{ display: { md: "flex" }, flexDirection: "row" }}>
            <Grid item container alignItems="stretch">
              {users?.map((user, id) => {
                return <PersonCard key={id} user={user} />;
              })}
            </Grid>
          </Container>
        ) : (
          <Container maxWidth="lg" sx={{ display: { md: "flex" }, flexDirection: "row" }}>
            <Grid item container alignItems="stretch">
              {batchPics?.map((pic, id) => {
                return <Gallery key={id} pic={pic} />;
              })}
            </Grid>
          </Container>
        )}
      </Container>
    </div>
  );
};

export default BatchPage;
