import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { AccessTime } from '@mui/icons-material';
import {createTheme, ThemeProvider, useTheme} from '@mui/material';
import {Link} from 'react-router-dom'


const TourCard = (props) => {
const theme = useTheme();
    
    return(
        
        <Grid item xs={3} >
        <ThemeProvider theme={theme}>
        <Link to={`/${props.id}`}>
        <Paper elevation={3}> 
            <img src={require(`../images/${props.image_name}`)} 
            alt="MISSING JPG"
            className="img"/>
            <Box paddingX={1}>

                <Typography variant="subtitle1" component="h2">
                {props.name}
                </Typography>
                
                <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
                >
                    <AccessTime sx={{ width: 12.5 }}/>
                    <Typography variant="body2" component="p" marginLeft={0.5}
                    >
                    {props.time}
                    </Typography>
                </Box>

                <Box 
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                    marginTop={3}
                >
                    <Rating 
                        name="read-only" 
                        value= {props.rating}
                        precision={0.5} 
                        readOnly 
                        size="small" 
                    />

                    <Typography variant="body2" component="p" marginLeft={0.5}
                    >
                    {props.rating}
                    </Typography>
                    <Typography variant="body2" component="p" marginLeft={1.5}>
                    ({props.reviews} reviews)
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" component="h4" marginTop={1}>
                    From £{props.rate}
                    </Typography>
                </Box>

            </Box>
        </Paper>
        </Link>
        </ThemeProvider>
        </Grid>  
          
        );
}

export default TourCard;