import { useQuery } from 'react-query';

import { getDogAllBreedsRawData } from 'services/dogs';
import { ResponseDogApi } from 'services/types';

export function useDogAllBreeds() {
  return useQuery<ResponseDogApi, Error>(
    ['dogsAllBreeds'],
    getDogAllBreedsRawData,
    { retry: false },
  );
}
