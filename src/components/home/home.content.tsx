import React, { FunctionComponent } from 'react';
import { Profile } from '../../data/profile.types';
import { Container } from '../basics/container/container.component';
import { HomeExperience } from './experience/experience.component';
import { HomeHeader } from './header/header.component';
import { HomeProfile } from './profile/profile.component';
import { HomeSkills } from './skills/skills.component';
import { HomeStudies } from './studies/studies.component';

export interface HomeContentProps {
  data: {
    profile: Profile;
  };
}

export const HomeContent: FunctionComponent<HomeContentProps> = ({ data }) => (
  <>
    <HomeHeader data={data.profile} />

    <main>
      <Container>
        <HomeProfile data={data.profile} rowCount={2} />
        <HomeExperience title="Experience" data={data.profile} />
        <HomeSkills title="Skills" data={data.profile} />
        <HomeStudies title="Education" data={data.profile} />
      </Container>
    </main>
  </>
);
