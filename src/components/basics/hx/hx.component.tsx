import { default as cx } from 'classnames';
import React, { ComponentPropsWithRef, FunctionComponent } from 'react';
import styles from './hx.module.scss';

export interface HxProps extends ComponentPropsWithRef<'h1'> {}

export const H1: FunctionComponent<HxProps> = ({ className, ...rest }) => (
  <h1 className={cx(className, styles.h1)} {...rest} />
);

export const H2: FunctionComponent<HxProps> = ({ className, ...rest }) => (
  <h2 className={cx(className, styles.h2)} {...rest} />
);
