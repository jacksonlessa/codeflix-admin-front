import React from 'react';
import { Box, ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Container, Typography } from '@mui/material';
import {Routes, Route, Link} from "react-router-dom";


const Home = () => (
  <Box>
    <Container>
      <Typography variant="h1" component="h1">
        home
      </Typography>
    </Container>
  </Box>
);

const About = () => (
  <Box>
    <Container>
      <Typography variant="h1" component="h1">
        about
      </Typography>

    </Container>
  </Box>
);

function App() {
  return <ThemeProvider theme={appTheme}>
    <Box component="main" sx={{
      height: "100vh",
      backgroundColor: (theme) => theme.palette.grey[900]
    }}>
      <Header />
      <Layout>
        <h1>Welcome to React Router!</h1>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Layout>
    </Box>
  </ThemeProvider>
  // return <Button variant="contained">Hello World</Button>;
}

export default App;
