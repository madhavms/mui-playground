import React from 'react';
import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {ThemeProvider, useTheme} from '@mui/material';

const cities = require('../tours.js');

const Home = () => {
  const theme = useTheme();
  return(
    <div className="App">
      <Container sx={{ marginY : 5}}>
        <Grid container spacing={5}>
          {cities.map((city) => (
          <React.Fragment key={'Fragment'+city.id}>
          <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
            key= {city.name+city.id}
          >
          Top {city.name} Tours
          </Typography>
          <Grid container spacing={5} key={'Grid'+city.id}>
          {city.tours.map((tour) => (
            <TourCard
              name={tour.name}
              key={tour.name+tour.id}
              rating={tour.rating}
              time={tour.time}
              reviews={tour.reviews}
              rate={tour.rate}
              image_name={tour.image_name}
              id={tour.id}
            />
          ))}
          </Grid>
          </React.Fragment>

          
          ))}
           
        </Grid>
      </Container>
    </div>
  );
          };

export default Home;