import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import FileBase from "react-file-base64";
const Upload = () => {
  return (
    <div>
      <Container maxWidth="lg">
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
      </Container>
    </div>
  );
};

export default Upload;
