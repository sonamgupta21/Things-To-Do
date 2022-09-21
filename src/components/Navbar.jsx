import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../service/firebase";
import { useEffect } from "react";
import logo from "../img/myLogo.png";
const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  // console.log(user);
  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              height: "25px",
              width: "25px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "7px",
            }}
          >
            <img src={logo} alt="" style={{ height: "20px", width: "20px" }} />
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              ml: 2,
              display: "flex",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Things To-Do
          </Typography>

          <Box
            sx={{
              mr: 4,
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {user && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    mr: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={user.photoURL} alt="user" className="avatar" />
                  <Typography
                    sx={{
                      ml: 2,
                      display: "flex",
                      flexGrow: 1,
                      fontFamily: "monospace",

                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {user.displayName}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    ml: 2,
                  }}
                >
                  <Button
                    sx={{
                      fontSize: "1.2rem",
                      mr: 2,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".2rem",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
