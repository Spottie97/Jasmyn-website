import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" gutterBottom>
            About Jasmyn Plaasprodukte
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Jasmyn Plaasprodukte has been serving the Hartbeespoort community with quality farm products since [year]. Our commitment to excellence and customer satisfaction has made us a beloved destination for locals and tourists alike.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Add an image here */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
