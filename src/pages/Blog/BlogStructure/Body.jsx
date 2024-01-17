import React, { useState, useEffect } from 'react';
import { LIMIT, CARD_LIMIT, SKIP } from '../../../styles/AppConstant';
import {Box, Button} from '@mui/material';
import AjTypography from '../../../components/AjTypography.jsx';
import Grid from '@mui/material/Unstable_Grid2';
import PostList from './PostList';
import { commonStyles } from "../../../styles/CommonStyle.js";
import { blogCSS } from '../blogStyles.js';
import BlogBanner from './BlogBanner.jsx';
import { baseUrl } from '../../../styles/AppConstant';
import { blog_contents } from '../../../styles/AppConstant';

const Body = () => {

  const [query, setQuery] = useState({ limit: CARD_LIMIT, skip: SKIP });
  const [searchBlog, setSearchBlog] = useState("")
  let limit = LIMIT;

  // query blogList
  const [ blogList, setBlogList ] = useState([]) 

  useEffect(() => {setBlogList(blog_contents), []})

  // query spottedBlog
  const [ spottedBlog, setSpottedBog ] = useState()
  useEffect(() => {setSpottedBog(blogList && blogList[0])}, [blogList])

  const handlePagination = () => {
        setQuery((prev) => ({
          ...prev,
          skip: prev.skip + limit,
        }));   
    }
  
  useEffect(() => {
    let searchObject = {
      limit: query.limit,
      skip: query.skip,
    };

    // fetch(`${baseUrl}/api/public/blogs`, {
    //   method: "GET",
    //   headers: {'Content-Type': 'application/json'},
    //   query: searchObject,
    // })
    // .then(res => {
    //     if(res.status) {
    //         console.log(res);
    //         // setBlogList(res...)
    //         console.log("Fetch successfully!");
    //     }
    // })
    // .catch(error => console.log("Error: ", error))
    
  }, [query]);

  const filterBlog = (key) => {
    setSearchBlog(key);
  }

  const search = (data) => {
      return data?.blogs?.filter(blog => blog.title.toLowerCase()
        .includes(searchBlog.toLowerCase()))
  }
  

  return (
    <>
      <BlogBanner bannerInfo={spottedBlog} filterBlog={filterBlog} />
   
        <Grid container>
          {blogList?.totalCount !== 0 ? 
          <Box sx={{ ...blogCSS.orientation }}>
              <Box sx={{ ...blogCSS.blog_cards }}>
                  <PostList blogContents={search(blogList)} />
              </Box>

              {blogList?.totalCount > 10 && 
                <Box sx={{ ...blogCSS.more_btn_container}} >
                  <Button 
                    sx={{ ...blogCSS.load_more_btn }} 
                    onClick={handlePagination}
                  >Load More</Button>
              </Box> 
              }
          </Box> : 
            <Box
                sx={{
                  ...commonStyles.noContentBox,
                }}
            >
                <AjTypography
                  styleData={commonStyles.noDataText}
                  displayText="No data found"
                />
            </Box>
        }
        </Grid>
        </>
  );
}

export default Body;