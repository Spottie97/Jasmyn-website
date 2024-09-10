import React from 'react';
import { Typography, Container, Grid, TextField, Button, Paper } from '@mui/material';

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Name" variant="outlined" required />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Email" variant="outlined" type="email" required />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Message" variant="outlined" multiline rows={4} required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Our Location
            </Typography>
            <Typography variant="body1">
              123 Farm Road, Hartbeespoort
            </Typography>
            <Typography variant="body1">
              Email: info@jasmynplaasprodukte.co.za
            </Typography>
            <Typography variant="body1">
              Phone: +27 12 345 6789
            </Typography>
            {/* Add a map component here if desired */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
