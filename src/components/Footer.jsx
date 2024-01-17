import * as React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
// import { logoRedirection } from "../../../Services/commonService/commonService";
import { fb, twt, insta, utube, linkedin, phone, message, address } from "../styles/AppConstant";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#F0F5EC",
      }}
    >
      <Grid padding="2rem 0">
        <Grid
          container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // gap: "14rem",
            justifyContent: "space-between",
            margin: "0 auto",
            alignItems: "flex-start",
            width: "85%",
            "@media(max-width: 1300px)": { gap: "4rem" },
            "@media(max-width: 468px)": { gap: "1rem" },
          }}
        >
          <Grid
            item
            sx={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              // "@media(max-width: 768px)": {},
              "@media(max-width: 468px)": {
                width: "fit-content",
              },
            }}
          >
            <Box
              sx={{
                cursor: "pointer",
                marginBottom: ".7rem",
                "@media(max-width: 468px)": {
                  // width: "200px",
                  marginBottom: "0",
                },
              }}
            //   onClick={() => logoRedirection()}
            >
              <img
                src="https://ajeoba-website.oss-eu-central-1.aliyuncs.com/compressed-images/compressed-images/logo_ax0dgb.svg"
                alt="logo"
              />
            </Box>
            <Typography
              sx={{
                color: "#575555",
                fontSize: "1rem",
                fontWeight: "400",
                lineHeight: "2rem",
                textAlign: "justify",
                fontFamily: "DM Sans",
                "@media(max-width: 768px)": {},
                "@media(max-width: 468px)": {
                  lineHeight: "1.49rem",
                  fontSize: ".8rem",
                },
              }}
            >
              Ajeoba is an agriculture value-chain digital infrastructure
              provider focused on bridging various gaps identified in the
              agricultural value chain.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                margin: "1rem 0",
                "@media(max-width: 768px)": {
                  gap: "1.5rem",
                },
                "@media(max-width: 600px)": {
                  gap: ".2rem",
                  margin: ".4rem 0",
                },
              }}
            >
              <a href="https://www.facebook.com/ajeobaex/">
                <img
                  src={fb}
                  alt="/fb"
                />
              </a>
              <a href="https://www.instagram.com/ajeobaex/">
                <img
                  src={insta}
                  alt="/fb"
                  sx={{ cursor: "pointer" }}
                />
              </a>
              <a href="https://www.twitter.com/ajeobaex">
                <img
                  src={utube}
                  alt="/fb"
                  sx={{ cursor: "pointer" }}
                />
              </a>
              <a href="https://www.youtube.com/@ajeoba">
                <img
                  src={twt}
                  alt="/fb"
                  sx={{ cursor: "pointer" }}
                />
              </a>
              <a href="https://www.linkedin.com/ajeobaex">
                <img
                  src={linkedin}
                  alt="/fb"
                  sx={{ cursor: "pointer" }}
                />
              </a>
            </Box>
          </Grid>
          {/* <Box sx={{ width: "14.14rm" }}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "1rem",
                lineHeight: "1.7rem",
                color: "black",
                fontFamily: "DM Sans",

                "@media(max-width: 768px)": {
                  fontSize: "1rem",
                },
                "@media(max-width: 468px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Marketplace
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "4rem",
                color: "#575555",
                fontSize: "1rem",
                fontWeight: "400",
                lineHeight: "2.01rem",
                margin: "1rem 0",
                fontFamily: "DM Sans",
                "@media(max-width: 768px)": {
                  fontSize: ".9rem",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: ".8rem",
                  flexDirection: "column",
                  fontFamily: "DM Sans",
                  "@media(max-width: 468px)": {
                    gap: ".4rem",
                  },
                }}
              >
                <div>Rice</div>
                <div>Fish</div>
                <div>Grapes</div>
                <div>Beans</div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: ".8rem",
                  flexDirection: "column",
                  fontFamily: "DM Sans",
                  "@media(max-width: 468px)": {
                    gap: ".4rem",
                  },
                }}
              >
                <div>Goat</div>
                <div>Chicken</div>
                <div>Mango</div>
                <div>Soybeans</div>
              </Box>
            </Box>
          </Box> */}
          <Box sx={{ width: "7.1rm" }}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "1rem",
                lineHeight: "1.7rem",
                color: "black",
                fontFamily: "DM Sans",

                "@media(max-width: 768px)": {
                  fontSize: "1rem",
                },
                "@media(max-width: 468px)": {
                  fontSize: "1rem",
                },
              }}
            >
              More
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: ".8rem",
                flexDirection: "column",
                fontFamily: "DM Sans",
                color: "#575555",
                fontSize: "1rem",
                fontWeight: "400",
                lineHeight: "2.01rem",
                margin: "1rem 0",
                "@media(max-width: 768px)": {
                  fontSize: ".9rem",
                },
                "@media(max-width: 468px)": {
                  gap: ".4rem",
                },
              }}
            >
              <div>
              <a
                  href="/about-us"
                  style={{ color: "#575555", textDecoration: "none" }}
                >
                  About Us
                </a>
              </div>
              <div>
                <a
                  href="/faqs"
                  style={{ color: "#575555", textDecoration: "none" }}
                >
                  FAQs
                </a>
              </div>
              <div>
                <a
                  href="/blog"
                  style={{ color: "#575555", textDecoration: "none" }}
                >
                  Blog
                </a>
              </div>
            </Box>
          </Box>
          <Box
            sx={{
              width: "20rem",
              "@media(max-width: 768px)": {
                fontSize: "1rem",
                width: "16.31rem",
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "1rem",
                lineHeight: "1.7rem",
                color: "black",
                fontFamily: "DM Sans",

                "@media(max-width: 768px)": {
                  fontSize: "1rem",
                },
                "@media(max-width: 468px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Contact Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1.2rem",
                flexDirection: "column",
                fontFamily: "DM Sans",
                lineHeight: "2.01rem",
                color: "#575555",
                fontSize: "1rem",
                fontWeight: "400",
                margin: "1rem 0",
                "@media(max-width: 768px)": {
                  fontSize: ".9rem",
                },
                "@media(max-width: 468px)": {
                  gap: ".6rem",
                },
              }}
            >
              <span>
                <img
                  src={phone}
                  alt="phone"
                />{" "}
                +234 9070534510
              </span>
              <span>
                <img
                  src={message}
                  alt="phone"
                />{" "}
                admin@ajeoba.com
              </span>
              <span>
                <img
                  src={address}
                  alt="phone"
                />{" "}
                13 Okotie Eboh Street, Ikoyi, Lagos State.
              </span>
            </Box>
          </Box>{" "}
        </Grid>
        <Divider
          sx={{
            margin: "1rem auto",
            width: "85%",
            "@media(max-width: 468px)": {
              margin: "1rem auto",
            },
          }}
        />
        <Box
          sx={{
            width: "85%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1rem",
              fontWeight: "400",
              color: "#575555",
              // marginTop: "1rem",
              fontFamily: "DM Sans",
              "@media(max-width: 768px)": {
                fontSize: ".9rem",
              },
              "@media(max-width: 468px)": {
                fontSize: ".5rem",
              },
            }}
          >
            Copyright ©️ 2023 Ajeoba. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              justifyContent: "space-between",
              alignItems: "center",
              "@media(max-width: 468px)": {
                gap: "1rem",
              },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: "400",
                color: "#575555",
                // marginTop: "1rem",
                fontFamily: "DM Sans",
                "@media(max-width: 768px)": {
                  fontSize: ".9rem",
                },
                "@media(max-width: 468px)": {
                  fontSize: ".5rem",
                },
              }}
            >
              <a
                  href="/terms-and-conditions"
                  style={{ color: "#575555", textDecoration: "none" }}
                >
                  Terms & Conditions
                </a>
              
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: "400",
                color: "#575555",
                // marginTop: "1rem",
                fontFamily: "DM Sans",
                "@media(max-width: 768px)": {
                  fontSize: ".9rem",
                },
                "@media(max-width: 468px)": {
                  fontSize: ".5rem",
                },
              }}
            >
              <a
                  href="/privacy-policy"
                  style={{ color: "#575555", textDecoration: "none" }}
                >
                  Data Privacy
                </a>
              
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;