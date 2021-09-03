import { rest } from 'msw';
import { renderHook } from '@testing-library/react-hooks';

import { server } from 'setupTests';
import { IDog } from 'models/dog';
import { createWrapper } from 'hooks/testUtils';
import { useDogRandomImageByBreed } from './useDogRandomImageByBreed';

describe('dogAllBreeds query hook', () => {
  const params: IDog = {
    breedName: 'test',
    subBreedName: 'test',
  };

  test('successful', async () => {
    const { result, waitFor } = renderHook(() => useDogRandomImageByBreed(params, true), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data?.status).toBe('success');
  });

  test('failed', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => res(ctx.status(500))),
    );

    const { result, waitFor } = renderHook(() => useDogRandomImageByBreed(params, true), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeDefined();
  });
});
