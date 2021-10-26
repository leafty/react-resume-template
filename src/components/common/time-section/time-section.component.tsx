import React from 'react';
import {
  BaseSectionProps,
  BaseSection,
} from '../base-section/base-section.component';
import { BaseSectionHeading } from '../base-section/heading/heading.component';
import { TimeSectionList, TimeSectionListProps } from './list/list.component';

export interface TimeSectionProps<
  Data = any,
  As extends React.ElementType = React.ElementType,
> extends Omit<BaseSectionProps<As>, 'title'> {
  title?: string;
  data?: Data[];
  listProps?: Omit<TimeSectionListProps, 'data'>;
}

export const TimeSection: React.FunctionComponent<TimeSectionProps> = ({
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
