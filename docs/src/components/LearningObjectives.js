import React from 'react';
import clsx from 'clsx';
import styles from './LearningObjectives.module.css';

const ObjectiveItem = ({ children }) => {
  return <li className={clsx('margin--sm', styles.objectiveItem)}>{children}</li>;
};

export default function LearningObjectives({ children, title = "Learning Objectives" }) {
  return (
    <div className={clsx('margin--lg', styles.learningObjectives)}>
      <h3>{title}</h3>
      <ul className={styles.objectiveList}>
        {children}
      </ul>
    </div>
  );
}

export { ObjectiveItem };