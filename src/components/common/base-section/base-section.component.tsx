import { default as cx } from 'classnames';
import React from 'react';
import styles from './base-section.module.scss';

export interface BaseSectionProps<
  As extends React.ElementType = React.ElementType,
> extends React.ComponentPropsWithRef<'section'> {
  as?: As;
  heading?: React.ReactNode;
}

export const BaseSection: React.FunctionComponent<BaseSectionProps> = ({
  as,
  heading,
  children,
  className,
  ...rest
}) => {
  const Root = as || 'section';
  return (
    <Root className={cx(className, styles.section)} {...rest}>
      {heading}
      {children}
    </Root>
  );
};
