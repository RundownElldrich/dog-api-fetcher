export function parseBreedNames(rawData: Object) {
  const parsedData: { breedName: string; subBreedName?: string; }[] = [];

  Object.entries(rawData).forEach(([key, value]) => {
    if (!value.length) {
      parsedData.push({
        breedName: key,
      });
    } else if (value.length) {
      value.forEach((arrValue: string) => {
        parsedData.push({
          breedName: key,
          subBreedName: arrValue,
        });
      });
    }
  });

  return parsedData;
}
