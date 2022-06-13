import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FileBase from "react-file-base64";
import { Card, CardActionArea, CardContent } from "@mui/material";
const Update = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Container maxWidth="lg">
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
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
                    // onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Update
        </Button>
      </Box>
    </Container>
  );
};

export default Update;
