import { Button } from 'common/components/Button/Button';
import { IDog } from 'models/dog';
import {
  BreedName,
  Image,
  Label,
  Wrapper,
} from './styled';

type DogItemProps = {
  currentDog: IDog
  randomDogImageUrl: string
  randomDogImageIsFetching: boolean,
  refetchRandomDogImage(): void
}

export function DogDetails({
  currentDog,
  randomDogImageUrl,
  randomDogImageIsFetching,
  refetchRandomDogImage,
}: DogItemProps) {
  const { breedName, subBreedName } = currentDog;

  return (
    <Wrapper>
      <BreedName>
        <Label>{subBreedName}</Label>
        <Label>{breedName}</Label>
      </BreedName>
      {randomDogImageUrl && (
      <Image
        alt="dog"
        src={randomDogImageUrl}
      />
      )}
      <Button
        type="button"
        disabled={randomDogImageIsFetching}
        onClick={refetchRandomDogImage}
      >
        get another image
      </Button>
    </Wrapper>
  );
}
