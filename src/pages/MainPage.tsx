import React, { useEffect, useState } from 'react';
import fetcher from '../components/Fetcher';
import MediaCard from '../components/card';
import { Character } from '../interfaces/CardIfc';
import styles from '../styles/MainPage.module.css';

export default function MainPage() {
  const [data, setData] = useState<Character[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getData = async () => {
    try {
      const response = await fetcher('https://api.sampleapis.com/futurama/characters', 'get', null, null);
      console.log(response);
      setData(response);
    } catch (err: any) {
      console.log(err);
      setErrorMessage(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.generalContainer}>
      <div className={styles.titleContainer}>
        <h1>Futurama Characters</h1>
      </div>
      <div className={styles.grid}>
        {data.map((element: Character) => {
          let { species, homePlanet } = element;
          if (!element.species || element.species === 'undefined') {
            species = 'Unknown';
          }
          if (!element.homePlanet || element.homePlanet === 'undefined') {
            homePlanet = 'Unknown';
          }

          return (
            <MediaCard
              key={element.id}
              character={element}
              id={element.id}
              imgSrc={element.images.main}
              imgAlt={element.name.first}
              title={`${element.name.first} ${element.name.middle} ${element.name.last}`}
              description={`${species} - ${homePlanet}`}
            />
          );
        })}
      </div>
    </div>
  );
}
