import { default as cx } from 'classnames';
import React, {
  ComponentPropsWithRef,
  ElementType,
  FunctionComponent,
  ReactNode,
} from 'react';
import styles from './item.module.scss';

export interface ListSectionListItemProps<As extends ElementType = ElementType>
  extends ComponentPropsWithRef<'li'> {
  as?: As;
  label?: ReactNode;
}

export const ListSectionListItem: FunctionComponent<ListSectionListItemProps> =
  ({ as, label, children, className, ...rest }) => {
    const Root = as || 'li';

    return (
      <Root className={cx(className, styles.item)} {...rest}>
        <div className={styles.label}>{label}</div>
        <div className={styles.main}>{children}</div>
      </Root>
    );
  };
