import './App.scss'
import HomePage from "./pages/home/Home";
import { ThemeProvider } from '@mui/material/styles';
import DarkTheme from "./theme/DarkTheme";

function App() {

  return (
      <ThemeProvider theme={DarkTheme}>
        <HomePage />
      </ThemeProvider>
  );
}

export default App
