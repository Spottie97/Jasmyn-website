import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Jasmyn Plaasprodukte offers quality farm products and a unique shopping experience in Hartbeespoort.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Farm Road, Hartbeespoort
              <br />
              Email: info@jasmynplaasprodukte.co.za
              <br />
              Phone: +27 12 345 6789
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              Facebook
            </Link>
            <br />
            <Link href="https://www.instagram.com/" color="inherit">
              Instagram
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://jasmynplaasprodukte.co.za/">
              Jasmyn Plaasprodukte
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
