import { User } from './User';

interface Availability {
  day?: string[];
  timeRange?: string;
}

export interface Profile {
  _id?: string;
  user?: User;
  firstName: string;
  lastName: string;
  gender?: string;
  birthday?: Date;
  email?: string;
  description?: string;
  location?: string;
  phoneNumber?: number;
  availability?: Availability;
  photos: string[];
  isSitter?: boolean;
  hourlyRate?: number;
}

export interface AllProfilesApiData {
  profiles: Profile[];
  error?: { message: string };
}

export interface GetProfileApiPost {
  error?: { message: string };
  success?: { success: string };
}
