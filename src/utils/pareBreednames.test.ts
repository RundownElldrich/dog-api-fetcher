import { parseBreedNames } from './parseBreedNames';

describe('breed names parsing utility', () => {
  it('returns breed names array from raw data', () => {
    const rawData = {
      dog1: [],
      dog2: [],
    };
    const result = [
      {
        breedName: 'dog1',
      },
      {
        breedName: 'dog2',
      },
    ];

    expect(parseBreedNames(rawData)).toEqual(result);
  });

  it('returns breed names array from raw data - with sub breed', () => {
    const rawData = {
      dog1: ['sub1'],
      dog2: [],
    };

    const result = [
      {
        breedName: 'dog1',
        subBreedName: 'sub1',
      },
      {
        breedName: 'dog2',
      },
    ];

    expect(parseBreedNames(rawData)).toEqual(result);
  });
});
