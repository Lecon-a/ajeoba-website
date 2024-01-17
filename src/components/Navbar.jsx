import React from 'react'
import { useNavigate } from "react-router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import menu from "../assets/Images/Group 88.png"

const pagesLarge = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about-us" },
    { label: "FAQs", link: "/faqs" },
    { label: "Blogs", link: "/blog" },
  ];
  const pagessmall = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about-us" },
    { label: "FAQs", link: "/faqs" },
    { label: "Blogs", link: "/blog" },
    { label: "Get Started", link: "/" },
  ];


  function Navbar() {

    const handleTabs = (e, link) => {
        e.preventDefault();
        window.location.href = link; 
      };

    const userToken = localStorage.getItem("token");
  
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const getWindowSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
    };
  
    getWindowSize();
  
    return (
      <AppBar
        position="sticky"
        sx={{
          boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.2)",
          background: "white",
          padding: "1rem 0",
          "@media(max-width:1900px)": {
            padding: "1rem 0",
          },
          // "@media(max-width:768px)": {
          //   boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.3)",
          // },
        }}
      >
        <Container sx={{ padding: "0" }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
            //   href="#app-bar-with-responsive-menu"
                onClick={() => logoRedirection()}
              sx={{
                mr: 2,
                // display: { xs: "none", md: "flex" },
                "@media(max-width: 999px)": {
                  display: "none",
                },
                "@media(min-width: 1000px)": {
                  display: "flex",
                },
              }}
            >
              <img
                src="https://ajeoba-website.oss-eu-central-1.aliyuncs.com/compressed-images/compressed-images/logo_ax0dgb.svg"
                alt="Logo"
              />
            </Typography>
  
            <Box
              sx={{
                flexGrow: 1,
                // display: { xs: "flex", md: "none" }
                "@media(max-width: 999px)": {
                  display: "flex",
                },
                "@media(min-width: 1000px)": {
                  display: "none",
                },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <img
                  src={menu}
                  alt="menu"
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  // display: { xs: "block", md: "none" },
                  "@media(max-width: 999px)": {
                    display: "block",
                  },
                  "@media(min-width: 1000px)": {
                    display: "none",
                  },
                  textAlign: "center",
                }}
              >
                {pagessmall.map((page, index) => (
                  <MenuItem
                    key={index}
                    sx={{
                      width: "10rem",
                    }}
                  >
                    {page.label === "Get Started" ? (
                      !userToken ? (
                        <Typography
                          sx={{
                            color: "white",
                            backgroundColor: "#006d33",
                            borderRadius: "6px",
                            borderWidth: "1px",
                            textAlign: "center",
                            width: "5.7rem",
                            height: "2.2rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: "1rem",
                            fontWeight: "500",
                            fontFamily: "DM Sans",
                            lineHeight: "1.2rem",
                          }}
                        >
                          {page.label}
                        </Typography>
                      ) : null
                    ) : (
                      <Typography
                        onClick={() => navigate(page.link)}
                        sx={{
                          textAlign: "center",
                          color:
                            location.pathname === page.link ? "#006d33" : "black",
                        }}
                      >
                        {page.label}
                      </Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {userToken ? (
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  // display: {
                  //   xs: "flex",
                  //   md: "none",
                  // },
                  "@media(max-width: 999px)": {
                    display: "flex",
                  },
                  "@media(min-width: 1000px)": {
                    display: "none",
                  },
                  flexGrow: 1,
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img
                  src="https://ajeoba-website.oss-eu-central-1.aliyuncs.com/compressed-images/compressed-images/logo_ax0dgb.svg"
                  alt="Logo"
                />
              </Typography>
            ) : null}
            <Box
              sx={{
                flexGrow: 1,
                // display: { xs: "none", md: "flex" },
                "@media(max-width: 999px)": {
                  display: "none",
                },
                "@media(min-width: 1000px)": {
                  display: "flex",
                },
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              {pagesLarge.map((page, index) => (
                <Typography
                  variant
                  key={index}
                  // onClick={handleCloseNavMenu}
                //   href={page.link}
                  onClick={(e) => handleTabs(e, page.link)}
                  sx={{
                    my: 2,
                    display: "block",
                    fontSize: "1.3rem",
                    fontWeight: "500",
                    fontFamily: "DM Sans",
                    lineHeight: "1.2rem",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "#6D9E3F",
                    },
                    color: location.pathname === page.link ? "#006d33" : "black",
                    margin: "0 2rem",
                    "@media(max-width: 1400px)": {
                      fontSize: "1.1rem",
                    },
                  }}
                >
                  {page.label}
                </Typography>
              ))}
            </Box>
  
            <Box
              sx={{
                flexGrow: 0,
                // display: { xs: "flex", md: "none" }
                "@media(max-width: 999px)": {
                  display: "flex",
                },
                "@media(min-width: 1000px)": {
                  display: "none",
                },
              }}
            >
              {userToken ? (
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, color: "#006d33" }}
                  >
                    <img
                      src="Assets/Images/user_daqfcq.svg"
                      alt="Logo"
                    />
                  </IconButton>
                </Tooltip>
              ) : (
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    // display: {
                    //   xs: "flex",
                    //   md: "none",
                    // },
                    "@media(max-width: 999px)": {
                      display: "flex",
                    },
                    "@media(min-width: 1000px)": {
                      display: "none",
                    },
                    flexGrow: 1,
                    fontFamily: "DM Sans",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src="https://ajeoba-website.oss-eu-central-1.aliyuncs.com/compressed-images/compressed-images/logo_ax0dgb.svg"
                    alt="Logo"
                  />
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                // display: { xs: "none", md: "flex" },
                "@media(max-width: 999px)": {
                  display: "none",
                },
                "@media(min-width: 1000px)": {
                  display: "flex",
                },
                gap: "2rem",
                justifyContent: "center",
              }}
            >
  
              <Box
                sx={{
                  color: "white",
                  backgroundColor: "#006d33",
                  borderRadius: "6px",
                  borderWidth: "1px",
                  textAlign: "center",
                  width: "8.7rem",
                  height: "3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "1.3rem",
                  fontWeight: "500",
                  fontFamily: "DM Sans",
                  lineHeight: "1.2rem",
                  "@media(max-width: 1400px)": {
                    fontSize: "1.1rem",
                    width: "7.7rem",
                    height: "2.6rem",
                  },
                }}
                onClick={() => navigate("/")}
              >
                Get Started
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

export default Navbar