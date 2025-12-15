import React from 'react';
import clsx from 'clsx';
import styles from './ExerciseBox.module.css';

const ExerciseItem = ({ children, number }) => {
  return (
    <li className={clsx('margin--sm', styles.exerciseItem)}>
      <strong>Exercise {number}:</strong> {children}
    </li>
  );
};

export default function ExerciseBox({ children, title = "Exercises" }) {
  return (
    <div className={clsx('margin--lg', styles.exerciseBox)}>
      <h3>{title}</h3>
      <ul className={styles.exerciseList}>
        {children}
      </ul>
    </div>
  );
}

export { ExerciseItem };