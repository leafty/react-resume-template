import { default as cx } from 'classnames';
import React, {
  ComponentPropsWithRef,
  ElementType,
  FunctionComponent,
  ReactNode,
} from 'react';
import styles from './base-section.module.scss';

export interface BaseSectionProps<As extends ElementType = ElementType>
  extends ComponentPropsWithRef<'section'> {
  as?: As;
  heading?: ReactNode;
}

export const BaseSection: FunctionComponent<BaseSectionProps> = ({
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
