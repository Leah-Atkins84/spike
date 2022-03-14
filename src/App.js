
import * as React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import {Button} from "@mui/material/";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
//import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#26a69a',
    },
    secondary: {
      main: '#1CCFCF',
      
    }
  },
});


function App() {
  const columns = [
    { field: 'fullName', headerName: 'Full Name',  headerClassName: 'app-theme--header', width: 100},
    {field: 'region', headerName: 'Region', headerClassName: 'app-theme--header', width: 90},
    {field: 'city', headerName: 'City', headerClassName: 'app-theme--header', width: 90},
    {field: 'graduationDate', headerName: 'Graduation Date',headerClassName: 'app-theme--header', width: 100},
    {field: 'needsRide', headerName: 'Needs Ride', headerClassName: 'app-theme--header', width: 100},
    {field: 'provideRide', headerName: 'Provide Ride', headerClassName: 'app-theme--header', width: 100}
  ];
  
  const rows = [
    { id: 1, fullName: 'Leah Atkins', region: 'central', city: 'St. Paul', graduationDate: '4/29/22', needsRide: 'No', provideRide: 'Yes'},
    { id: 2, fullName: 'Lolly Dolly', region: 'south-west', city: 'Shakopee', graduationDate: '3/25/22', needsRide: 'No', provideRide: 'Yes'},
    { id: 3, fullName: 'Holy Moley', region: 'north', city: 'Fridley', graduationDate: '6/10/22', needsRide: 'No', provideRide: 'Yes'},
    { id: 4, fullName: 'Leah Atkins', region: 'east', city: 'MeowTown', graduationDate: '4/29/22', needsRide: 'No', provideRide: 'Yes'}
  ]


  return (
    <>
    <ThemeProvider theme={theme}>
      <Box>
      <AppBar color="primary">
        <Toolbar>
    
      <Typography variant="h6" sx={{ display:"flex", justifyContent:"center" }}>Car pool finder</Typography>
      <Button color="inherit">Login</Button>
     
      </Toolbar>
      </AppBar>
      </Box>
      <Box sx={{ height: 100, width: 10,'.app-theme--header': {backgroundColor:"secondary" }}}></Box>
      <div style={{ height: 400, width: '100%'}}>
        <DataGrid sx={{display:"flex", 
        justifyContent:"center"}}
        // display="flex"
        // justifyContent="center"
          rows={rows}
          columns={columns}
          />


      </div>
      <Button variant="contained">
       Edit User Info
      </Button>
      </ThemeProvider>

    </>

  );
}

export default App;





