import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import "./App.css"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs/AboutUs';
import FAQs from './pages/Faqs/Faqs';
import Blogs from './pages/Blog/Blog';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/faqs",
    element: <FAQs />
  },
  {
    path: "/blog",
    element: <Blogs />
  },
  {
    path: "*",
    element: <PageNotFound />
  }
])

const App = () => {

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar/>
        <RouterProvider router={router} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

