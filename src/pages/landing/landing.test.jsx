import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Landing', async () => {
    it('renders movie data correctly', async () => {
        // create your own function called renderApp and refcator this to pass only a string URL path
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        const title = await screen.findByText('Fast X');
        expect(title).toBeDefined();

        const int = await screen.findByText('7');
        const dec = await screen.findByText('.372');

        expect(int).toBeDefined();
        expect(dec).toBeDefined();
    });

    it('shows search results when typing', async () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        const headig = await screen.findByText(
            'MovieMash: Where you meet your perfect movie match!'
        );
        expect(headig).toBeDefined();

        const searchBar = screen.getByRole('textbox', {});
        fireEvent.change(searchBar, { target: { value: 'scrubs' } });
        expect(searchBar.value).toBe('scrubs');

        const firstItem = await screen.findByText('Scrubs');
        const secondItem = await screen.findByText('Scrubs: Interns');
        const thirdItem = await screen.findByText('Wormwood Scrubs');
        expect(firstItem).toBeDefined();
        expect(secondItem).toBeDefined();
        expect(thirdItem).toBeDefined();
    });
});
