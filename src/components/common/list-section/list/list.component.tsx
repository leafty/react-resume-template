import { default as cx } from 'classnames';
import React, {
  ComponentPropsWithRef,
  ElementType,
  FunctionComponent,
  ReactElement,
} from 'react';
import { ListSectionListItem } from '../item/item.component';
import styles from './list.module.scss';

export interface ListSectionListProps<
  As extends ElementType = ElementType,
  Data = any,
> extends ComponentPropsWithRef<'ol'> {
  as?: As;
  data?: Data[];
  itemFn?: (data: Data) => ReactElement;
}

export const ListSectionList: FunctionComponent<ListSectionListProps> = ({
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
