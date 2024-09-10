import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const departments = [
  { name: 'Farm Fresh Produce', image: '/images/produce.jpg' },
  { name: 'Bakery', image: '/images/bakery.jpg' },
  { name: 'Butchery', image: '/images/butchery.jpg' },
  { name: 'Dairy', image: '/images/dairy.jpg' },
  { name: 'Gift Shop', image: '/images/gift-shop.jpg' },
];

const Departments: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Our Departments
      </Typography>
      <Grid container spacing={3}>
        {departments.map((dept, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={dept.image}
                alt={dept.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {dept.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Departments;
