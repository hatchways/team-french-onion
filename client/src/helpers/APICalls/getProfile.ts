import { FetchOptions } from '../../interface/FetchOptions';
import { AllProfilesApiData } from '../../interface/Profile';

const getProfile = async (): Promise<AllProfilesApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'Get',
    credentials: 'include',
  };
  return await fetch(`/profile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getProfile;
