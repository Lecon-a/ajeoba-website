import React from "react";
import Carousel from "react-material-ui-carousel";
import "../styles/css/style.css";
import { Typography, Box } from "@mui/material";

import { makeStyles } from "@mui/styles";

const Banners = ({slides}) => {
  const classes = useStyles();

  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Carousel
          indicators={true}
          autoPlay={true}
          animation={"slide"}
          duration={400}
          navButtonsAlwaysVisible={false}
          fullHeightHover={false}
          swipe={false}
          indicatorContainerProps={{
            sx: {
              position: "absolute",
              top: "90%",
              zIndex: 100,
              "@media (max-width: 480px)": {
                top: "80%",
              },
            },
          }}
          activeIndicatorIconButtonProps={{
            sx: {
              color: "#006d33",
            },
          }}
          indicatorIconButtonProps={{
            sx: {
              color: "white",
              padding: "10px",
            },
            "@media (max-width: 768px)": {
              padding: "5px",
            },
            "@media (max-width: 480px)": {
              padding: "1px",
            },
          }}
        >
          {slides.map((item, index) => (
            <div key={index}>
              <Box
                sx={{
                  "@media (max-width: 480px)": {
                    height: "50vh",
                  },
                }}
              >
                <img
                  className={classes.bannerImage}
                  src={item.image}
                  alt="iconS"
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "85vh",
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                ></div>
              </Box>
              <Typography className={classes.bannerCaption}>
                {item.text}
              </Typography>
            </div>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Banners;

const useStyles = makeStyles((theme) => ({
  bannerImage: {
    height: "80vh",
    width: "100%",
    objectFit: "cover",
    // objectFit: "fill",
    "@media (max-width: 768px)": {
      height: "70vh",
    },
    "@media (max-width: 480px)": {
      height: "50vh",
    },
  },
  bannerCaption: {
    maxWidth: "50%",
    top: "38%",
    left: "25%",
    position: "absolute",
    color: "white",
    fontSize: "3rem!important",
    fontFamily: "DM Sans",
    lineHeight: "4.14rem",
    fontWeight: "700",
    textAlign: "center",
    "@media (max-width: 768px)": {
      fontSize: "1.5rem!important",
      lineHeight: "2.3rem",
      maxWidthidth: "60%",
      top: "40%",
      left: "23%",
    },
    "@media (max-width: 480px)": {
      fontSize: "1rem!important",
      fontWeight: "600",
      lineHeight: "2rem",
      maxWidth: "80%",
      top: "31%",
      left: "8%",
    },
  },
}));