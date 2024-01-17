import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import { styles } from "../styles/LayoutStyle"
import { styles as viewSupportStyles } from "../styles/ViewSupportStyles";
import { pageNotFoundStyle } from "../styles/pageNotFoundStyle";
import { commonStyles } from "../styles/CommonStyle";

const PageNotFound = () => {

  return (
    <Grid>
      <Grid sx={{ ...styles.logoImageContainer }}></Grid>

      <Grid>
        <Grid
          container
          item
          sx={{
            ...viewSupportStyles.gridRadius,
            ...viewSupportStyles.ViewSupportMainContainer,
            ...pageNotFoundStyle.mainGrid,
          }}
        >
          <Box sx={{ ...commonStyles.relativePosition }}>
            <DescriptionOutlinedIcon
              sx={{ ...pageNotFoundStyle.DescriptionOutlinedIconStyle }}
            />
            <SearchIcon
              sx={{
                ...pageNotFoundStyle.SearchIconStyle,
              }}
            />
          </Box>

          <Box sx={{ ...pageNotFoundStyle.contentBoxStyle }}>
            <Typography
              sx={{
                ...pageNotFoundStyle.notFoundStyle,
              }}
            >
              Page Not Found
            </Typography>

            <Typography
              sx={{
                ...pageNotFoundStyle.notFoundContentStyle,
              }}
            >
              We're sorry, the page you requested could not be found. Please go
              back to homepage
            </Typography>
          </Box>
          
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageNotFound;
