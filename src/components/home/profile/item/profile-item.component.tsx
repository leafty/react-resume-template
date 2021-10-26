import React, { FunctionComponent, ReactNode } from 'react';
import styles from './profile-item.module.scss';

export interface ProfileItemProps {
  label?: string;
  content?: ReactNode;
  icon?: ReactNode;
}

export const ProfileItem: FunctionComponent<ProfileItemProps> = ({
  label,
  content,
  icon,
}) => {
  return (
    <li className={styles.li}>
      <span className={styles.label}>
        <span className={styles.icon}>{icon}</span>&nbsp;{label || ''}
      </span>{' '}
      <span className={styles.text}>{content || ''}</span>
    </li>
  );
};
