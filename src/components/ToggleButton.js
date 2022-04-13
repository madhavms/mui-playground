import React, {useContext} from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {ColorModeContext} from './ColourModeProvider'

export const ToggleButton = () => {
    const theme = useTheme();
    const [mode, setMode] = useContext(ColorModeContext);
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          console.log(mode);
          setMode((prevMode) => prevMode ==='light'? 'dark' :'light');
      
        },
      }),
      [],
    );


    return(
        <Box
              sx={{
                display: 'flex',
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                marginRight: 30
              }}
            >
              {theme.palette.mode} mode
              <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
        );
}

export default ToggleButton;