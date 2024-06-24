import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/bancame_logo_white.svg';
import '../styles/LandingPage.module.css';
import useStyles from '../styles';

export default function LandingPage() {
  const classes = useStyles();
  const goToBancaMe = () => {
    window.open('https://banca.me', '_blank');
  };
  const goToMaterialUI = () => {
    window.open('https://mui.com', '_blank');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Entrevista Nicolás Guzmán </p>
        <div className={classes.buttonsContainer}>
          <Button
            component={Link}
            to="/characters"
            className={classes.button}
            variant="contained"
          >
            Ir a Solución
          </Button>
        </div>
      </header>
    </div>
  );
}
