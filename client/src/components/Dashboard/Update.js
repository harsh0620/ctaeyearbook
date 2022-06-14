import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FileBase from "react-file-base64";
import { Avatar, Card, CardActionArea, CardContent } from "@mui/material";
import { useAuth } from "../Context/authContext";
import { useState } from "react";
const Update = ({ setUploading, uploading }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { update, user } = useAuth();
  const [userInfo, setUserInfo] = useState({
    name: user?.name,
    email: user?.email,
    password: user?.password,
    branch: user?.branch,
    batch: user?.batch,
    quote: user?.quote,
    insta: user?.insta,
    linkedIn: user?.linkedIn,
    selectedFile: user?.selectedFile,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(userInfo);
    setUploading(true);
    await update(userInfo);
    setUploading(false);
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User_data"));
    setUserInfo(user);
  }, []);
  return (
    <Container maxWidth="lg">
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              value={userInfo?.name}
              autoComplete="given-name"
              name="name"
              disabled="true"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              value={userInfo?.email}
              required
              fullWidth
              disabled="true"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
              value={userInfo?.password}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              disabled="true"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setUserInfo({ ...userInfo, quote: e.target.value })}
              value={userInfo?.quote}
              required
              fullWidth
              name="quote"
              label="Quote(Max 320 Chars)"
              id="quote"
              autoComplete="new-quote"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              onChange={(e) => setUserInfo({ ...userInfo, branch: e.target.value })}
              value={userInfo?.branch}
              autoComplete="given-branch"
              name="branch"
              required
              fullWidth
              id="branch"
              label="Branch"
              autoFocus
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              onChange={(e) => setUserInfo({ ...userInfo, batch: e.target.value })}
              value={userInfo?.batch}
              autoComplete="given-batch"
              name="batch"
              required
              fullWidth
              id="batch"
              label="Batch(ex.2018-2022)"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              onChange={(e) => setUserInfo({ ...userInfo, insta: e.target.value })}
              value={userInfo?.insta}
              autoComplete="given-insta"
              name="insta"
              required
              fullWidth
              id="insta"
              label="InstaLink"
              autoFocus
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              onChange={(e) => setUserInfo({ ...userInfo, linkedIn: e.target.value })}
              value={userInfo?.linkedIn}
              autoComplete="given-linkedin"
              name="linkedin"
              required
              fullWidth
              id="linkedin"
              label="LinkedIn Link"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setUserInfo({ ...userInfo, selectedFile: base64 })}
                  />
                </CardContent>
              </CardActionArea>
              <Avatar
                variant="square"
                style={{ height: "200px", width: "200px", margin: "auto" }}
                className="profile_avatar"
                src={userInfo.selectedFile}
              />
            </Card>
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Update
        </Button>
      </Box>
    </Container>
  );
};

export default Update;
