import "./App.css";
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchAppBar from './components/AppBar';
import Tour from './pages/Tour';
import {ColorModeProvider} from './components/ColourModeProvider';
import MUIThemeProvider from './components/ThemeProvider';


function App() {
  return (
    <BrowserRouter>
      <ColorModeProvider>
      <MUIThemeProvider>
      <SearchAppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Tour/>}/>
      </Routes>
      </MUIThemeProvider>
      </ColorModeProvider>
    </BrowserRouter>
  );
}

export default App;
