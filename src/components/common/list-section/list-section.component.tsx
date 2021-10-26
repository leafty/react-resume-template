import React, { ElementType, FunctionComponent } from 'react';
import {
  BaseSection,
  BaseSectionProps,
} from '../base-section/base-section.component';
import { BaseSectionHeading } from '../base-section/heading/heading.component';
import { ListSectionList, ListSectionListProps } from './list/list.component';

export interface ListSectionProps<
  Data = any,
  As extends ElementType = ElementType,
> extends Omit<BaseSectionProps<As>, 'title'> {
  title?: string;
  data?: Data[];
  listProps?: Omit<ListSectionListProps, 'data'>;
}

export const ListSection: FunctionComponent<ListSectionProps> = ({
  title,
  heading,
  data,
  listProps,
  ...rest
}) => {
  const Heading = heading || <BaseSectionHeading>{title}</BaseSectionHeading>;

  return (
    <BaseSection heading={Heading} {...rest}>
      <ListSectionList data={data} {...listProps} />
    </BaseSection>
  );
};
