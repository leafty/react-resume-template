import { default as cx } from 'classnames';
import React from 'react';
import { H2 } from '../../../basics/hx/hx.component';
import styles from './heading.module.scss';

export interface BaseSectionHeadingProps<
  As extends React.ElementType = React.ElementType,
> extends React.ComponentPropsWithRef<'h2'> {
  as?: As;
}

export const BaseSectionHeading: React.FunctionComponent<BaseSectionHeadingProps> =
  ({ as, className, ...rest }) => {
    const Root = as || H2;
    return <Root className={cx(className, styles.heading)} {...rest} />;
  };
