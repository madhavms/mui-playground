import Container from "@mui/material/Container";
import { Typography, BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/Accordion';
import BasicModal from "../components/Modal";
import React from "react";
import { useParams } from 'react-router';
import {ThemeProvider, useTheme} from '@mui/material';

const cities = require('../tours.js');



const Tour = () => {
    const [value, setValue] = React.useState(0);
    const { id } = useParams();
    const theme = useTheme(); 
    const city = cities.filter(city => city.id == 1);
    const tour = city[0].tours[id - 1];
    console.log(theme);
    return(
  
   <Container sx={{ width:900 }}>
   <ThemeProvider theme={theme}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the World in {tour.name}
        </Typography>
        </ThemeProvider>
        <Box marginTop={3} sx={{display:"flex"}}>
            <img
            src={require(`../images/${tour.image_name}`)}
            alt="JPEG Missing"
            height={325}/>
            <ImageCollage height={325}/>
        </Box>
        <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
        {tour.about}
        </Typography>
        </Box>
        <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
            Frequently asked questions
        </Typography>
        <CustomizedAccordions/>
        </Box>
        
        <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
        marginTop={4}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          margintop = {3}
        >
          <BasicModal />
        </BottomNavigation>
      </Paper>

   </Container>
   
)};

export default Tour;