import { IDog } from 'models/dog';
import { ResponseDogApi } from './types';

const apiUrl: string = 'https://dog.ceo/api';

const makeApiCall = async <T>(
  apiPath: string,
): Promise<T> => {
  const resp = await fetch(`${apiUrl}${apiPath}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!resp.ok) {
    throw new Error(
      `Error from api call ${apiPath}: status=${resp.status
      } ${await resp.text()}`,
    );
  }

  return resp.json();
};

export const getDogAllBreedsRawData = async (): Promise<ResponseDogApi> => {
  const resp = await makeApiCall<ResponseDogApi>('/breeds/list/all');

  if (resp.status === 'error') {
    throw new Error('Breeds list not found');
  }

  return resp;
};

export const getRandomDogImageByBreed = async (dog: IDog | null): Promise<ResponseDogApi> => {
  const resp = await makeApiCall<ResponseDogApi>(
    `/breed/${dog?.breedName}${dog?.subBreedName ? `/${dog.subBreedName}` : ''}/images/random`,
  );

  if (resp.status === 'error') {
    throw new Error('Dog image not found');
  }

  return resp;
};
