import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { Button } from '@mui/material';
import styles from '../styles/CharacterPage.module.css';
import randomPicker from '../utils/random';

export default function CharacterPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    id,
    name,
    images,
    gender,
    species,
    homePlanet,
    occupation,
    sayings,
  } = state.character;

  const charName = `${name.first} ${name.middle} ${name.last}`;
  let newSpecies = species;
  let newHomePlanet = homePlanet;
  let pronoun = 'his';

  if (gender === 'Female') {
    pronoun = 'her';
  }

  if (!species || species === 'undefined') {
    newSpecies = 'Unknown';
  }
  if (!homePlanet || homePlanet === 'undefined') {
    newHomePlanet = 'Unknown';
  }

  const selectedSayings = randomPicker(sayings, 3);

  const handleGoBack = () => {
    navigate(-1);
  };

  const goToFuturamaWiki = () => {
    window.open('https://en.wikipedia.org/wiki/Futurama', '_blank');
  };

  return (
    <div className={styles.generalContainer}>
      <div className={styles.header}>
        <FaArrowLeft size={48} onClick={handleGoBack} className={styles.icon} />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <img src={images.main} alt={charName} className={styles.charImg} />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.titleContainer}>
            <h1>
              {charName}
            </h1>
          </div>
          <div className={styles.description}>
            <div className={styles.infoSection}>
              <span className={styles.title}>Planet:</span>
              <span className={styles.value}>{newHomePlanet}</span>
            </div>
            <div className={styles.infoSection}>
              <span className={styles.title}>Species:</span>
              <span className={styles.value}>{newSpecies}</span>
            </div>
            <div className={styles.infoSection}>
              <span className={styles.title}>Gender:</span>
              <span className={styles.value}>{gender}</span>
            </div>
            <div className={styles.infoSection}>
              <span className={styles.title}>Occupation:</span>
              <span className={styles.value}>{occupation}</span>
            </div>
          </div>
          <div className={styles.sayingsContainer}>
            {/* <div className={styles.sayingsTitle}> */}
            <h2 className={styles.sayingsTitle}>
              {`Some of ${pronoun} sayings`}
            </h2>
            {/* </div> */}
            <div className={styles.sayings}>
              {selectedSayings.map((str, index) => (
                <div className={styles.saying}>{str}</div>
              ))}
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              onClick={goToFuturamaWiki}
              color="secondary"
              className={styles.button}
              variant="contained"
            >
              Más Sobre Futurama
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
