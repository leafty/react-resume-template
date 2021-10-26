import { DateTime } from 'luxon';
import { ReactNode } from 'react';

export interface ProfileBit {
  label?: string;
  content: ReactNode;
  icon?: ReactNode;
}

export interface Experience {
  start: DateTime;
  end?: DateTime;
  company: ReactNode;
  location: string;
  position: string;
  content: ReactNode;
}

export interface Study {
  start: DateTime;
  end?: DateTime;
  establishment: string;
  location: string;
  title: ReactNode;
}

export interface Skill {
  title: string;
  content: ReactNode;
}

/** Your profile data */
export interface Profile {
  /** Your first name */
  firstName: string;
  /** Your last name */
  lastName: string;

  /** Your desired job title, will appear as the CV's header */
  jobTitle: string;

  /** Data for the profile bits just below the CV's header */
  profileBits: ProfileBit[];

  /** Data for the "Experience" section */
  experience: Experience[];

  /** Data for the "Education" section */
  studies: Study[];

  /** Data for the "Skills" section */
  skills: Skill[];
}
