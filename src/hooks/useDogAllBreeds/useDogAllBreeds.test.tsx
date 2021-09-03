import { rest } from 'msw';
import { renderHook } from '@testing-library/react-hooks';

import { server } from 'setupTests';
import { createWrapper } from 'hooks/testUtils';
import { useDogAllBreeds } from './useDogAllBreeds';

describe('dogAllBreeds query hook', () => {
  test('successful', async () => {
    const { result, waitFor } = renderHook(() => useDogAllBreeds(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data?.status).toBe('success');
  });

  test('failed', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => res(ctx.status(500))),
    );

    const { result, waitFor } = renderHook(() => useDogAllBreeds(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeDefined();
  });
});
