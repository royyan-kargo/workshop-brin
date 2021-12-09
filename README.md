# Steps

We will overwrite everything on `src/App.js` with this code:

```jsx
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
```

Then, we'll add `src/Table.js` with this code:

```jsx
import {
  Link,
  Table as Muitable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function createData(nik, name, maritalStatus, salary) {
  return { nik, name, maritalStatus, salary };
}

const rows = [
  createData(
    1,
    'Lionel Messi',
    'Married',
    300000,
  ),
  createData(
    2,
    'Moh. Salah',
    'Single',
    400000,
  ),
  createData(
    3,
    'Robert Lewandowski',
    'Married',
    250000,
  ),
  createData(
    4,
    'Erling Haaland',
    'Single',
    450000,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

function Table() {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Employees
      </Typography>
      <Muitable size="small">
        <TableHead>
          <TableRow>
            <TableCell>NIK</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Marital Status</TableCell>
            <TableCell align="right">Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.nik}>
              <TableCell>{row.nik}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.maritalStatus}</TableCell>
              <TableCell align="right">{`Rp${row.salary}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Muitable>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more
      </Link>
    </>
  );
}

export default Table;
```
