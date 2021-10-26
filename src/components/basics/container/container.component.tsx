import React, { FunctionComponent } from 'react';
import { Container as BaseContainer } from 'react-bootstrap';
import { ContainerProps as BaseContainerProps } from 'react-bootstrap/esm/Container';

export interface ContainerProps extends BaseContainerProps {}

export const Container: FunctionComponent<ContainerProps> = ({
  className,
  ...rest
}) => {
  return <BaseContainer className={className} {...rest} />;
};
