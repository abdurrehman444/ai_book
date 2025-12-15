import React from 'react';
import clsx from 'clsx';
import styles from './AssessmentBox.module.css';

const AssessmentCriteria = ({ children }) => {
  return <li className={clsx('margin--sm', styles.assessmentCriteria)}>{children}</li>;
};

export default function AssessmentBox({ children, title = "Assessment" }) {
  return (
    <div className={clsx('margin--lg', styles.assessmentBox)}>
      <h3>{title}</h3>
      <div className={styles.assessmentContent}>
        {children}
      </div>
    </div>
  );
}

export { AssessmentCriteria };