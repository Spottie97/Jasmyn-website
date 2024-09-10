import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';

const WeStrive: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        We Strive
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Quality
            </Typography>
            <Typography variant="body1">
              We strive to provide the highest quality farm products to our customers.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Community
            </Typography>
            <Typography variant="body1">
              We aim to support and strengthen our local farming community.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Sustainability
            </Typography>
            <Typography variant="body1">
              We are committed to sustainable farming practices and environmental stewardship.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WeStrive;
