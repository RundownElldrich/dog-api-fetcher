import { Button } from 'common/components/Button/Button';
import { IDog } from 'models/dog';

interface IDogItemProps {
  content: IDog
  // eslint-disable-next-line no-unused-vars
  handleDogItemClick(dog:IDog): void
}

export function DogItem({ content, handleDogItemClick }: IDogItemProps) {
  const { breedName, subBreedName } = content;

  return (
    <Button
      withScaling
      type="button"
      onClick={() => handleDogItemClick(content)}
    >
      {subBreedName && (
      <span>
        {subBreedName}
        {' '}
      </span>
      )}
      <span>{breedName}</span>
    </Button>
  );
}
