import React, {useContext} from 'react';
import {ColorModeContext} from './ColourModeProvider'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

export default function MUIThemeProvider(props) {
    
    const [mode, setMode] = useContext(ColorModeContext);
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode],
      {components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontsize: 11
                    }
                },

                {
                   props: {
                       variant: "body3"
                   },
                   style: {
                       fontsize: 9
                   }
               },

                
            ]
        }
    }}
    );
  
    return (
    
        <ThemeProvider theme={theme}>
          {props.children}
        </ThemeProvider>

    );
  }