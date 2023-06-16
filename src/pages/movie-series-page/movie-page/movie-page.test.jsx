import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../../../App';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/dom';

describe('Search page results', async () => {
    const queryClient = new QueryClient();

    it('renders movie title', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/movie/123']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(screen.findAllByText('The Lord of the Rings')).toBeDefined();
    });

    it('renders main ingormation', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/movie/123']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findByText('4M')).toBeDefined();
        expect(await screen.findByText('3B')).toBeDefined();
        expect(await screen.findByText('Released')).toBeDefined();
        expect(await screen.findByText('November 15, 1978')).toBeDefined();
        expect(await screen.findByText('6')).toBeDefined();
        expect(await screen.findByText('.56')).toBeDefined();
        expect(
            await screen.findByText(
                /The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron/
            )
        ).toBeDefined();
        expect(await screen.findByText('21.747')).toBeDefined();
    });

    it('renders cast and crew', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/movie/123']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findByText('Christopher Guard')).toBeDefined();
        expect(await screen.findByText('William Squire')).toBeDefined();
        expect(await screen.findByText('Saul Zaentz')).toBeDefined();
        expect(await screen.findByText('J.R.R. Tolkien')).toBeDefined();
    });

    it('renders similar genres', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/movie/123']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findByText('Romance')).toBeDefined();
        expect(await screen.findByText('Comedy')).toBeDefined();
    });

    it('renders similar movies', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/movie/123']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(
            await screen.findByText('Sebuah Seni untuk Memahami Kekasih')
        ).toBeDefined();
    });

    it('renders next and prev similar movies on button click', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/movie/123']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        const next = screen.getByRole('button', {
            name: /→/,
        });
        const prev = screen.getByTestId('prev-item');

        expect(next).toBeDefined;
        expect(prev).toBeDefined;

        fireEvent.click(next);
        expect(await screen.findByText('Chorabali')).toBeDefined();

        fireEvent.click(next);
        expect(await screen.findByText('Seven Elements')).toBeDefined();

        fireEvent.click(next);
        expect(await screen.findByText('The Day of the Locust')).toBeDefined();

        fireEvent.click(prev);
        expect(await screen.findByText('Seven Elements')).toBeDefined();
    });
});
