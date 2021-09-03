import { IDog } from 'models/dog';
import { useQuery } from 'react-query';

import { getRandomDogImageByBreed } from 'services/dogs';
import { ResponseDogApi } from 'services/types';

export function useDogRandomImageByBreed(
  dog: IDog | null,
  enabled: boolean,
) {
  return useQuery<ResponseDogApi, Error>(
    ['dogRandomImageByBreed', dog],
    () => getRandomDogImageByBreed(dog),
    {
      enabled,
      retry: false,
      cacheTime: 0,
    },
  );
}
