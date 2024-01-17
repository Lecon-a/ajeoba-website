import React from 'react'
import { Box } from '@mui/material'
import Banners from '../components/Banners'
import { city, c_buyer, farming_assoc, proprietary_mobile, plowing, finance } from "../styles/AppConstant";
import DigitalInfra from '../components/DigitalInfra';
import ValueProp from '../components/ValueProp/ValueProp';
import Personas from '../components/Personas/Personas';
import MarketPlace from '../components/markeptplace/MarketPlace';
import Partners from '../components/Partners/Partners';


const Home = () => {
  return (
    <Box>
        <Box>
            <Banners slides={slides1}/>
            <DigitalInfra />
            <ValueProp />
            <Personas />
            <MarketPlace />
            <Partners />
        </Box>
    </Box>
  )
}

export default Home

const slides1 = [
    {
      image:farming_assoc,
      caption: "Farming Associations",
      text: "Agriculture made smarter with Ajeoba - the one-stop-shop for crop to market connections",
    },
    {
      image:city,
      caption: "Quality Assurance",
      text: "We're your digital plow - cultivating connections, harvesting profits",
    },
    {
      image:c_buyer,
      caption: "Corporate Buyers",
      text: "Join the harvest party with Ajeoba's all-inclusive platform for agribusiness",
    }
  ];