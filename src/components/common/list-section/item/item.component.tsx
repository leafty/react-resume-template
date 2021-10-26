import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { default as cx } from 'classnames';
import { Moment } from 'moment';
import React, { ReactNode } from 'react';
import styles from './item.module.scss';

export interface ListSectionListItemProps<
  As extends React.ElementType = React.ElementType,
> extends React.ComponentPropsWithRef<'li'> {
  as?: As;
  label?: ReactNode;
}

export const ListSectionListItem: React.FunctionComponent<ListSectionListItemProps> =
  ({ as, label, children, className, ...rest }) => {
    const Root = as || 'li';

    return (
      <Root className={cx(className, styles.item)} {...rest}>
        <div className={styles.label}>{label}</div>
        <div className={styles.main}>{children}</div>
      </Root>
    );
  };
