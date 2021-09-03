import { render } from '@testing-library/react';
import { rest } from 'msw';
import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const handlers = [
  rest.get(
    '*',
    (req, res, ctx) => res(
      ctx.status(200),
      ctx.json({
        status: 'success',
      }),
    ),
  ),
];

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function renderWithClient(ui: ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: (rerenderUi: ReactElement) => rerender(
      <QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>,
    ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: {children: ReactNode}) => (
    <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
  );
}
