import {ThemeProvider} from '@mui/material';
import theme from './theme/theme';
import NavbarTemplate from './components/template/Navbar';

function App(){
  return(
    <ThemeProvider theme={theme}>
      <NavbarTemplate/>
    </ThemeProvider>
  )
}
export default App;