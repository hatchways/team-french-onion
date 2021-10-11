export interface User {
  email: string;
  username: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
