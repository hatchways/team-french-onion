import { FetchOptions } from '../../interface/FetchOptions';
import { AllProfilesApiData } from '../../interface/Profile';

const getAllProfiles = async (
  searchValue: string | '',
  startValue: Date | null,
  endValue: Date | null,
): Promise<AllProfilesApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profile/profiles?search=${searchValue}&start=${startValue}&end=${endValue}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getAllProfiles;
