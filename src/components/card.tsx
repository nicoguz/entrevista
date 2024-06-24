import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CardProps from '../interfaces/CardIfc';
import styles from '../styles/Card.module.css';

export default function MediaCard(props: CardProps) {
  const {
    id,
    character,
    imgSrc,
    imgAlt,
    title,
    description,
  } = props;
  return (
    <div className={styles.generalContainer}>
      <Link to={`/characters/${id}`} state={{ character }} className={styles.imgContainer}>
        <img src={imgSrc} alt={imgAlt} className={styles.cardImg} />
      </Link>
      <div className={styles.cardContent}>
        <div className="cardDescription">
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/characters/${id}`} state={{ character }} className={styles.name}>
              {title}
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
