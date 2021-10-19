import { Profile } from '../interface/Profile';
import photo1 from '../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';
import photo2 from '../Images/b1f0e680702e811aa8ba333cb19c0e0ea95e8e31.png';
import photo3 from '../Images/d9fc84a0d1d545d77e78aaad39c20c11d3355074.png';

const mockProfile1: Profile = {
  firstName: 'firtstas',
  lastName: 'Lastsas',
  location: 'toronto',
  phoneNumber: 2345679876,
  isSitter: false,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  hourlyRate: 234,
  availability: {
    day: ['Mon', 'Wed'],
  },
  photos: [photo1, photo2, photo3],
};

const mockProfile2: Profile = {
  firstName: 'ferrestas',
  lastName: 'Lasdsd',
  location: 'blanca',
  phoneNumber: 2345679876,
  isSitter: false,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  hourlyRate: 14,
  photos: [],
};

const mockProfiles: Profile[] = [mockProfile1, mockProfile2];

export { mockProfiles, mockProfile1, mockProfile2 };
