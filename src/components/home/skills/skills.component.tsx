import React, { FunctionComponent } from 'react';
import { Skill } from '../../../data/profile.types';
import { ListSectionListItem } from '../../common/list-section/item/item.component';
import { ListSection } from '../../common/list-section/list-section.component';
import styles from './skills.module.scss';

export interface HomeSkillsProps {
  title?: string;
  data: {
    skills: Skill[];
  };
}

function itemFn({ title, content }: Skill) {
  return (
    <ListSectionListItem key={title} label={title}>
      <div className={styles.content}>{content}</div>
    </ListSectionListItem>
  );
}

export const HomeSkills: FunctionComponent<HomeSkillsProps> = ({
  title,
  data,
}) => (
  <ListSection
    id="skills"
    title={title || 'Skills'}
    data={data.skills}
    listProps={{ itemFn }}
  />
);
