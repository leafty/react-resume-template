import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { default as cx } from 'classnames';
import { DateTime } from 'luxon';
import React, {
  ComponentPropsWithRef,
  ElementType,
  FunctionComponent,
} from 'react';
import styles from './item.module.scss';

export interface TimeSectionListItemProps<As extends ElementType = ElementType>
  extends ComponentPropsWithRef<'li'> {
  as?: As;
  reverse?: boolean;
  start?: DateTime;
  end?: DateTime;
}

export const TimeSectionListItem: FunctionComponent<TimeSectionListItemProps> =
  ({ as, reverse, start, end, children, className, ...rest }) => {
    const Root = as || 'li';
    const startText = start?.toFormat('LL.yyyy') || 'Present';
    const endText = end?.toFormat('LL.yyyy') || 'Present';

    return (
      <Root className={cx(className, styles.item)} {...rest}>
        <div className={cx(styles.timeline, { [styles.reverse]: reverse })}>
          <div
            className={cx(styles.start, {
              [styles.present]: start === undefined,
            })}
          >
            <span>{startText}</span>
          </div>
          <div
            className={cx(styles.end, { [styles.present]: end === undefined })}
          >
            <span>{endText}</span>
          </div>
          <FontAwesomeIcon
            className={cx(styles.dotTop, {
              [styles.hide]: start === undefined || end === undefined,
            })}
            icon={faDotCircle}
          />
          <FontAwesomeIcon className={styles.dotBottom} icon={faDotCircle} />
        </div>
        <div className={styles.main}>{children}</div>
      </Root>
    );
  };
