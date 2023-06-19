import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

// these 3 tests can be a single test.
describe('Search page results', async () => {
    it('renders search results names', async () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/search/scrubs']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        const nameOne = await screen.findByText('Scrubs');
        const nameTwo = await screen.findByText('Scrubs: Interns');
        const nameThree = await screen.findByText('Wormwood Scrubs');
        expect(nameOne).toBeDefined;
        expect(nameTwo).toBeDefined;
        expect(nameThree).toBeDefined;
    });

    it('renders search results rating', async () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/search/scrubs']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        const int = await screen.findByText('5');
        const dec = await screen.findByText('.667');

        expect(int).toBeDefined;
        expect(dec).toBeDefined;
    });

    it('renders a MovieItem with a ShowMore button', async () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/search/scrubs']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );
        const nameOne = await screen.findByText('Scrubs');
        expect(nameOne).toBeDefined;

        const btn = screen.getAllByRole('button', {
            name: /Show more/i,
        });

        expect(btn).toBeDefined;
    });
});
