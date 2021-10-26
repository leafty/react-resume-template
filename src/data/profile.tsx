import { Profile } from './profile.types';
import React from 'react';
import { DateTime } from 'luxon';
import Link from 'next/link';
import {
  faAddressCard,
  faAt,
  faCalendar,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const profile: Profile = {
  firstName: 'First',
  lastName: 'Last',

  jobTitle: 'Job Title',

  profileBits: [
    {
      icon: <FontAwesomeIcon icon={faAddressCard} />,
      label: 'Name',
      content: 'First Last',
    },
    {
      icon: <FontAwesomeIcon icon={faAt} />,
      label: 'Email',
      content: (
        <Link href="mailto:fisrt.last@example.com">fisrt.last@example.com</Link>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faCalendar} />,
      label: 'Calendly',
      content: (
        <Link href="https://calendly.com/example/30min">
          Book a call with me
        </Link>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
      label: 'Location',
      content: <Link href="https://goo.gl/maps/example">Current Location</Link>,
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      label: 'LinkedIn',
      content: (
        <Link href="https://www.linkedin.com/in/first-last">first-last</Link>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faGithub} />,
      label: 'GitHub',
      content: <Link href="https://github.com/">first-last</Link>,
    },
  ],

  experience: [
    {
      start: DateTime.fromISO('2020-06-01T00:00:00Z'),
      company: (
        <Link href="https://www.linkedin.com/company/example/">Company 5</Link>
      ),
      location: 'Location 5',
      position: 'Position 5',
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <ul>
            <li>Bullet point 1</li>
            <li>
              Bullet point 2 and{' '}
              <Link href="https://example.com/">some reference</Link>
            </li>
            <li>Bullet point 3</li>
          </ul>
        </>
      ),
    },
    {
      start: DateTime.fromISO('2019-01-01T00:00:00Z'),
      end: DateTime.fromISO('2020-05-30T00:00:00Z'),
      company: (
        <Link href="https://www.linkedin.com/company/example/">Company 4</Link>
      ),
      location: 'Location 4',
      position: 'Position 4',
      content: (
        <>
          <p>
            Viverra justo nec ultrices dui sapien eget. Rhoncus urna neque
            viverra justo nec
          </p>
          <ul>
            <li>Bullet point 1</li>
            <li>
              Bullet point 2 and{' '}
              <Link href="https://example.com/">some reference</Link>
            </li>
            <li>Bullet point 3</li>
          </ul>
        </>
      ),
    },
    {
      start: DateTime.fromISO('2017-03-01T00:00:00Z'),
      end: DateTime.fromISO('2018-11-30T00:00:00Z'),
      company: (
        <Link href="https://www.linkedin.com/company/example/">Company 3</Link>
      ),
      location: 'Location 3',
      position: 'Position 3',
      content: (
        <>
          <p>Sed ullamcorper morbi tincidunt ornare massa</p>
          <ul>
            <li>Bullet point 1</li>
            <li>
              Bullet point 2 and{' '}
              <Link href="https://example.com/">some reference</Link>
            </li>
            <li>Bullet point 3</li>
          </ul>
        </>
      ),
    },
    {
      start: DateTime.fromISO('2015-10-01T00:00:00Z'),
      end: DateTime.fromISO('2017-02-28T00:00:00Z'),
      company: (
        <Link href="https://www.linkedin.com/company/example/">Company 2</Link>
      ),
      location: 'Location 2',
      position: 'Position 2',
      content: (
        <>
          <p>
            Purus gravida quis blandit turpis cursus. Enim tortor at auctor urna
            nunc
          </p>
          <ul>
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
          </ul>
        </>
      ),
    },
    {
      start: DateTime.fromISO('2015-02-01T00:00:00Z'),
      end: DateTime.fromISO('2015-08-31T00:00:00Z'),
      company: (
        <Link href="https://www.linkedin.com/company/example/">Company 1</Link>
      ),
      location: 'Location 1',
      position: 'Position 1',
      content: (
        <>
          <p>Nam libero justo laoreet sit amet cursus sit amet</p>
          <ul>
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
          </ul>
        </>
      ),
    },
  ],

  studies: [
    {
      start: DateTime.fromISO('2014-09-01T00:00:00Z'),
      end: DateTime.fromISO('2015-08-31T00:00:00Z'),
      establishment: 'University Dolor',
      location: 'Location 3',
      title: <strong>Important Diploma</strong>,
    },
    {
      start: DateTime.fromISO('2012-09-01T00:00:00Z'),
      end: DateTime.fromISO('2014-06-30T00:00:00Z'),
      establishment: 'Institude Ipsum',
      location: 'Location 2',
      title: <>Quis blandit turpis cursus in hac</>,
    },
    {
      start: DateTime.fromISO('2009-09-01T00:00:00Z'),
      end: DateTime.fromISO('2012-08-31T00:00:00Z'),
      establishment: 'University Lorem',
      location: 'Location 1',
      title: <>Turpis in eu mi bibendum</>,
    },
  ],

  skills: [
    {
      title: 'Category 1',
      content: 'Morbi, Tincidunt, Ornare, Massa Eget, Egestas',
    },
    {
      title: 'Category 2',
      content:
        'Lectus, Mauris, Ultrices, Eros in cursus turpis, Massa Tincidunt',
    },
    {
      title: 'Category 3',
      content: 'Habitant, Morbi Tristique, Senectus',
    },
  ],
};
