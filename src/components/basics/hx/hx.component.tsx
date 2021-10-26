import { default as cx } from 'classnames';
import React from 'react';
import styles from './hx.module.scss';

export interface HxProps extends React.ComponentPropsWithRef<'h1'> {}

export const H1: React.FunctionComponent<HxProps> = ({
  className,
  ...rest
}) => <h1 className={cx(className, styles.h1)} {...rest} />;

export const H2: React.FunctionComponent<HxProps> = ({
  className,
  ...rest
}) => <h2 className={cx(className, styles.h2)} {...rest} />;
