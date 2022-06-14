import { Button, Card, CardActionArea, CardContent, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useAuth } from "../Context/authContext";
import axios from "axios";
const Upload = ({ setUploading }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useAuth();
  const uploadHandler = async () => {
    if (!selectedFile) {
      return;
    }
    setUploading(true);
    const res = await axios.post("/user/upload_batchPic", { selectedFile: selectedFile, batch: user?.batch });
    setUploading(false);
    console.log(res);
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Grid item xs={12}>
          <Card>
            <CardActionArea>
              <CardContent>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setSelectedFile(base64)} />
              </CardContent>
            </CardActionArea>
            <Button onClick={uploadHandler} color="success">
              Submit
            </Button>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};

export default Upload;
