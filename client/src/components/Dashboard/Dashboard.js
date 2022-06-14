import React from "react";
import Update from "./Update";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Alert, Avatar, CardActionArea, Container, Grid, Slide } from "@mui/material";
import Upload from "../Upload/Upload";
import { useState } from "react";
import { useRef } from "react";
const Dashboard = () => {
  const [flag, setFlag] = React.useState(1);
  const [uploading, setUploading] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", zIndex: "999", top: "20%", left: "40%" }}>
        <Slide in={uploading}>
          <Alert onClose={() => setUploading(false)} security="success">
            "File Uploaded Successfully"
          </Alert>
        </Slide>
      </div>
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
                    Update Profile
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
                    Upload Batch Pics
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        {flag === 1 ? (
          <Update uploading={uploading} setUploading={setUploading} />
        ) : (
          <Upload uploading={uploading} setUploading={setUploading} />
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
