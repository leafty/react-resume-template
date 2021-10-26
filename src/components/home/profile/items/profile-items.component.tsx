import React, { FunctionComponent } from 'react';
import styles from './profile-items.module.scss';

export const ProfileItems: FunctionComponent = ({ ...props }) => (
  <ul className={styles.ul} {...props} />
);
