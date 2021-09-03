import { useState } from 'react';

import { parseBreedNames } from 'utils/parseBreedNames';
import { useDogAllBreeds } from 'hooks/useDogAllBreeds/useDogAllBreeds';
import { DogItem } from 'features/dogsList/components/DogItem/DogItem';
import { Modal } from 'common/components/Modal/Modal';
import { useDogRandomImageByBreed } from 'hooks/useDogRandomImageByBreed/useDogRandomImageByBreed';
import { IDog } from 'models/dog';
import { DogListWrapper } from './DogListWrapper';
import { DogDetails } from '../DogDetails/DogDetails';
import { Loader } from './styled';

export function DogList() {
  const [currentDog, setCurrentDog] = useState<IDog | null>(null);
  const [showModal, setShowModal] = useState(false);

  const {
    data: allDogsList,
    isLoading: isLoadingAllDogsList,
  } = useDogAllBreeds();

  const {
    data: randomDogImage,
    isLoading: randomDogImageIsLoading,
    isFetching: randomDogImageIsFetching,
    refetch: refetchRandomDogImage,
  } = useDogRandomImageByBreed(currentDog, showModal);

  const randomImageUrl = randomDogImage?.message;

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentDog(null);
  };

  const handleDogItemClick = (dog : IDog) => {
    setCurrentDog(dog);
    handleOpenModal();
  };

  return (
    <DogListWrapper>
      {isLoadingAllDogsList ? (
        <Loader>loading...</Loader>
      ) : (
        <>
          {parseBreedNames(allDogsList?.message as Object).map((dog) => (
            <DogItem
              key={`${dog.subBreedName}-${dog.breedName}`}
              content={dog}
              handleDogItemClick={handleDogItemClick}
            />
          ))}
        </>
      )}

      <div id="modal-root" />
      {currentDog && showModal && !randomDogImageIsLoading && (
        <Modal close={handleCloseModal}>
          <DogDetails
            currentDog={currentDog}
            randomDogImageUrl={randomImageUrl as string}
            randomDogImageIsFetching={randomDogImageIsFetching}
            refetchRandomDogImage={refetchRandomDogImage}
          />
        </Modal>
      )}
    </DogListWrapper>

  );
}
