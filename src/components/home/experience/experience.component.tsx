import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { Experience } from '../../../data/profile.types';
import { TimeSectionListItem } from '../../common/time-section/item/item.component';
import { TimeSection } from '../../common/time-section/time-section.component';
import styles from './experience.module.scss';

export interface HomeExperienceProps {
  title?: string;
  data: {
    experience: Experience[];
  };
}

function itemFn({
  start,
  end,
  company,
  location,
  position,
  content,
}: Experience) {
  return (
    <TimeSectionListItem
      key={start.toUTC().toISO()}
      reverse
      start={start}
      end={end}
    >
      <div>
        <span className={styles.company}>{company}</span>
        <span className={styles.location}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          &nbsp;{location}
        </span>
      </div>
      <div>
        <span className={styles.position}>
          <FontAwesomeIcon icon={faUser} />
          &nbsp;{position}
        </span>
      </div>
      <div className={styles.content}>{content}</div>
    </TimeSectionListItem>
  );
}

export const HomeExperience: FunctionComponent<HomeExperienceProps> = ({
  title,
  data,
}) => (
  <TimeSection
    id="experience"
    title={title || 'Experience'}
    data={data.experience}
    listProps={{ itemFn }}
  />
);
