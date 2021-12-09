import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
  CssBaseline,
  Container,
  Toolbar,
  Paper,
} from '@mui/material';
import Table from './Table';

const brinTheme = createTheme({
  palette: {
    primary: {
      main: '#ff2442',
      dark: '#b2192e',
      light: '#ff657a',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={brinTheme}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          BRIN Dashboard
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Toolbar />
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Table />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
