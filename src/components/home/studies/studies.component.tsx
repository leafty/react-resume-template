import {
  faMapMarkerAlt,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { Study } from '../../../data/profile.types';
import { TimeSectionListItem } from '../../common/time-section/item/item.component';
import { TimeSection } from '../../common/time-section/time-section.component';
import styles from './studies.module.scss';

export interface HomeStudiesProps {
  title?: string;
  data: {
    studies: Study[];
  };
}

function itemFn({ start, end, establishment, location, title }: Study) {
  return (
    <TimeSectionListItem
      key={start.toUTC().toISO()}
      reverse
      start={start}
      end={end}
    >
      <div>
        <span className={styles.establishment}>{establishment}</span>
        <span className={styles.location}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          &nbsp;{location}
        </span>
      </div>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faUserGraduate} />
        &nbsp;{title}
      </div>
    </TimeSectionListItem>
  );
}

export const HomeStudies: FunctionComponent<HomeStudiesProps> = ({
  title,
  data,
}) => (
  <TimeSection
    id="studies"
    title={title || 'Education'}
    data={data.studies}
    listProps={{ itemFn }}
  />
);
