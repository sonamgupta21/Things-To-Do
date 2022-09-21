import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
} from "../service/firebase";

import SignIn from "../components/SignIn";
import { fontSize, fontWeight } from "@mui/system";
const Home = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 100px)",
      }}
    >
      <Box sx={{ mt: 4, mb: 8 }}>

        <Typography
          sx={{
            marginTop: "3rem",
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: 800,
            letterSpacing: "1px",
            fontSize: "2.2rem",
          }}
        >
          Choose a Login Method
        </Typography>
      </Box>

      <Grid
        container
        sx={{
          width: " 75%",
          justifyContent: "center",
          alignItems: "center",
          m: "auto",
        }}
      >
        <Grid item xs={12} sm={6} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 4rem",
            }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#df4930", p: 1 }}
              onClick={signInWithGoogle}
            >
              <GoogleIcon sx={{ fontSize: "1.4rem", mr: 2 }} />{" "}
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "600",
                  letterSpacing: "3px",
                  fontSize: "1.2rem",
                }}
              >
                Google
              </Typography>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#000", p: 1 }}
              onClick={signInWithGithub}
            >
              <GitHubIcon sx={{ fontSize: "1.4rem", mr: 2 }} />{" "}
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  fontSize: "1.2rem",
                }}
              >
                Github
              </Typography>
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#507cc0", p: 1 }}
              onClick={signInWithFacebook}
            >
              <FacebookIcon sx={{ fontSize: "1.4rem", mr: 2 }} />{" "}
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  fontSize: "1.2rem",
                }}
              >
                Facebook
              </Typography>
            </Button>
          </Box>
        </Grid>
        <Grid md={2} item>
          <Typography
            sx={{
              marginTop: "24px",
              textAlign: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              fontSize: "2rem",
            }}
          >
            OR
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 4rem",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontFamily: "monospace", fontWeight: 700 }}
            >
              Sign in
            </Typography>
            <SignIn />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
