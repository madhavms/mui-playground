import React, {useContext} from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const ColorModeProvider = (props) => {
    
    const [mode, setMode] = React.useState('light');

    return (
        <ColorModeContext.Provider value={[mode, setMode]}>
        {props.children}
        </ColorModeContext.Provider>
      );
}





