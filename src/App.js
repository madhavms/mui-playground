import "./App.css";
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchAppBar from './components/AppBar';
import Tour from './pages/Tour';
import {ColorModeProvider} from './components/ColourModeProvider';
import MUIThemeProvider from './components/ThemeProvider';
import { Paper } from '@mui/material';
import UseWindowSize from "./components/UseWindowSize";


function App() {
  const { width, height } = UseWindowSize();
  return (
    
    <BrowserRouter>
      <ColorModeProvider>
      <MUIThemeProvider>
      <Paper style={{ height: '135vh'}}>
      <SearchAppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Tour/>}/>
      </Routes>
      </Paper>
      </MUIThemeProvider>
      </ColorModeProvider>
    </BrowserRouter>
  );
}

export default App;
