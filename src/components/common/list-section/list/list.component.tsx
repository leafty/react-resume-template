import { default as cx } from 'classnames';
import React from 'react';
import { ListSectionListItem } from '../item/item.component';
import styles from './list.module.scss';

export interface ListSectionListProps<
  As extends React.ElementType = React.ElementType,
  Data = any,
> extends React.ComponentPropsWithRef<'ol'> {
  as?: As;
  data?: Data[];
  itemFn?: (data: Data) => React.ReactElement;
}

export const ListSectionList: React.FunctionComponent<ListSectionListProps> = ({
  as,
  data,
  itemFn,
  className,
  ...rest
}) => {
  const Root = as || 'ol';
  const fn = itemFn || (() => <ListSectionListItem />);
  return (
    <Root className={cx(className, styles.list)} {...rest}>
      {(data || []).map(fn)}
    </Root>
  );
};
