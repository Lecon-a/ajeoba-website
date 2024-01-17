import * as React from 'react';
import NavBar from '../../../components/Navbar.jsx'
import { Box } from '@mui/material';


const Head = ({prevPage}) => {

  return (
    <>
      <NavBar isBlog={true} prevPage={prevPage} />
    </>
  );
}

export default Head;
