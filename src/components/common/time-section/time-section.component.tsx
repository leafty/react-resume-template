import React, { ElementType, FunctionComponent } from 'react';
import {
  BaseSection,
  BaseSectionProps,
} from '../base-section/base-section.component';
import { BaseSectionHeading } from '../base-section/heading/heading.component';
import { TimeSectionList, TimeSectionListProps } from './list/list.component';

export interface TimeSectionProps<
  Data = any,
  As extends ElementType = ElementType,
> extends Omit<BaseSectionProps<As>, 'title'> {
  title?: string;
  data?: Data[];
  listProps?: Omit<TimeSectionListProps, 'data'>;
}

export const TimeSection: FunctionComponent<TimeSectionProps> = ({
  title,
  heading,
  data,
  listProps,
  ...rest
}) => {
  const Heading = heading || <BaseSectionHeading>{title}</BaseSectionHeading>;

  return (
    <BaseSection heading={Heading} {...rest}>
      <TimeSectionList data={data} {...listProps} />
    </BaseSection>
  );
};
