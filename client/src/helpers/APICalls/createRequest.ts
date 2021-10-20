import { FetchOptions } from '../../interface/FetchOptions';

interface CreateRequestApiData {
  error?: { message: string };
  success?: { success: string };
}

const createRequest = async (
  userId: string,
  sitterId: string,
  start: Date,
  end: Date,
): Promise<CreateRequestApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, sitterId, start, end }),
    credentials: 'include',
  };
  return await fetch(`/requests`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createRequest;
