import { default as cx } from 'classnames';
import React, {
  ComponentPropsWithRef,
  ElementType,
  FunctionComponent,
  ReactElement,
} from 'react';
import { TimeSectionListItem } from '../item/item.component';
import styles from './list.module.scss';

export interface TimeSectionListProps<
  As extends ElementType = ElementType,
  Data = any,
> extends ComponentPropsWithRef<'ol'> {
  as?: As;
  data?: Data[];
  itemFn?: (data: Data) => ReactElement;
}

export const TimeSectionList: FunctionComponent<TimeSectionListProps> = ({
  as,
  data,
  itemFn,
  className,
  ...rest
}) => {
  const Root = as || 'ol';
  const fn = itemFn || (() => <TimeSectionListItem />);
  return (
    <Root className={cx(className, styles.list)} {...rest}>
      {(data || []).map(fn)}
    </Root>
  );
};
