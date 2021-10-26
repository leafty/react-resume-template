import React from 'react';
import styles from './profile-items.module.scss';

export const ProfileItems: React.FunctionComponent = ({ ...props }) => (
  <ul className={styles.ul} {...props} />
);
