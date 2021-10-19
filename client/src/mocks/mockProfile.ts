import { Profile } from '../interface/User';

const mockProfile1: Profile = {
  firstName: 'banana',
  lastName: 'man',
  email: 'what@email.com',
  location: 'Toronto',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const mockProfile2: Profile = {
  firstName: 'aqua',
  lastName: 'man',
  email: 'what@email.com',
  location: 'Vancouver',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const mockProfiles: Profile[] = [
  mockProfile1,
  mockProfile2,
  mockProfile2,
  mockProfile2,
  mockProfile2,
  mockProfile1,
  mockProfile2,
];

export { mockProfiles, mockProfile1, mockProfile2 };
