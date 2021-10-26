import React, { FunctionComponent } from 'react';
import { Container } from '../../basics/container/container.component';
import { H1 } from '../../basics/hx/hx.component';
import styles from './header.module.scss';

export interface HomeHeaderProps {
  data: {
    jobTitle: string;
  };
}

export const HomeHeader: FunctionComponent<HomeHeaderProps> = ({ data }) => (
  <header className={styles.header}>
    <Container className={styles.container}>
      <H1 className={styles.h1}>{data.jobTitle}</H1>
    </Container>
  </header>
);
