import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Jasmyn Plaasprodukte
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Quality Products
          </Typography>
          <Typography variant="body1">
            When you enter Hartbeespoort from the R511, the very first thing you notice after you start descending Saartjies Nek, is the large windmill on your left. The unexpected beauty of the mountains, the water and the windmill excites most South Africans and Tourists.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Add an image here */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
