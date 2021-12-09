# Steps

We will overwrite everything on `src/App.js` with this code:

```jsx
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

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
    </ThemeProvider>
  );
}

export default App;
```
