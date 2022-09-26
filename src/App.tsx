import React from 'react';
import { Box, ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Container, Typography } from '@mui/material';
import {Routes, Route, Link} from "react-router-dom";
import CategoryList from './features/category/CategoryList';
import CategoryEdit from './features/category/CategoryEdit';
import CategoryCreate from './features/category/CategoryCreate';


const NotFound = () => (
  <Box>
    <Container>
      <Typography variant="h1" component="h1">404</Typography>
      <Typography variant="h2" component="h2">Page not found</Typography>
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
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/create" element={<CategoryCreate />} />
          <Route path="/categories/edit/:id" element={<CategoryEdit />} />



          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Box>
  </ThemeProvider>
  // return <Button variant="contained">Hello World</Button>;
}

export default App;
