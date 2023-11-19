import { User } from '../interface/User';

const mockLoggedInUser: User = {
  email: 'mockLoggedInUser@gmail.com',
  username: 'mock LoggedIn user',
};

const mockOtherUser1: User = {
  username: 'Mock test user 1',
  email: 'mockTestUser1@gmail.com',
};
const mockOtherUser2: User = {
  username: 'Mock test user 2',
  email: 'mockTestUser2@gmail.com',
};
const mockOtherUser3: User = {
  username: 'Mock test user 3',
  email: 'mockTestUser3@gmail.com',
};

const demoUser = {
  email: 'f.mike@123.com',
  password: '12345678',
};
const demoUser2 = {
  email: 'f.mike@123.com',
  password: '12345678',
};
const demoUser3 = {
  email: 'f.mike@123.com',
  password: '12345678',
};

const mockOtherUsers: User[] = [mockOtherUser1, mockOtherUser2, mockOtherUser3];

export { mockLoggedInUser, mockOtherUsers, demoUser, demoUser2, demoUser3 };
