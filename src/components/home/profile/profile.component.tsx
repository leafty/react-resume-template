import React, { FunctionComponent } from 'react';
import { ProfileBit } from '../../../data/profile.types';
import { ProfileItem } from './item/profile-item.component';
import { ProfileItems } from './items/profile-items.component';
import styles from './profile.module.scss';

export interface HomeProfileProps {
  rowCount?: number;
  data: {
    profileBits: ProfileBit[];
  };
}

function splitColumns(
  profileBits: ProfileBit[],
  rowCount: number,
): ProfileBit[][] {
  const byColumns: ProfileBit[][] = [];

  let currentColumn: ProfileBit[] = [];
  profileBits.forEach((item) => {
    if (currentColumn.length == rowCount) {
      byColumns.push(currentColumn);
      currentColumn = [];
    }
    currentColumn.push(item);
  });
  if (currentColumn.length) byColumns.push(currentColumn);

  return byColumns;
}

export const HomeProfile: FunctionComponent<HomeProfileProps> = ({
  rowCount = 2,
  data,
}) => {
  const byColumns = splitColumns(data.profileBits, rowCount);

  console.log(byColumns);

  return (
    <section id="profile" className={styles.section}>
      {byColumns.map((itemsRow, col) => (
        <ProfileItems key={`profile-col-${col}`}>
          {itemsRow.map((item, row) => (
            <ProfileItem key={`profile-col-${col}-row-${row}`} {...item} />
          ))}
        </ProfileItems>
      ))}
    </section>
  );
};
