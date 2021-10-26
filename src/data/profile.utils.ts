import { Profile } from './profile.types';

export const fullName: (profile: Profile) => string = ({
  firstName,
  lastName,
}) => `${firstName} ${lastName}`;
