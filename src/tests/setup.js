import { expect, beforeAll, afterEach, afterAll } from 'vitest';

import matchers from '@testing-library/jest-dom/matchers';
import { server } from '../mocks/browser';
// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => {
    server.resetHandlers();
});
afterAll(() => server.close());
