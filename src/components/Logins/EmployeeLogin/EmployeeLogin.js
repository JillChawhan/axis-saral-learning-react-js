import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import Navigation from '../../Navigation/Navigations';
import { useNavigate } from 'react-router-dom'
import "./EmployeeLogin.css"



const theme = createTheme();


export default function EmployeeLogin() {


    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };



  return (
    <>
    <Navigation />  
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} style={{backgroundColor: "#AE275F"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Employee Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              id="btnlogin"
              style={{backgroundColor: "#AE275F"}}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              halfWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              id="btnlogin"
              style={{backgroundColor: "#AE275F"}}
              onClick={() => {
                navigate("/")
              }}
            >
               <ArrowBackIosNewTwoToneIcon/> Home
            </Button>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    <footer className='copyrightfooter'> 
    <p> Copyright &#169; By Axis Batch 9 </p>
    </footer>
    </>
  );
}

