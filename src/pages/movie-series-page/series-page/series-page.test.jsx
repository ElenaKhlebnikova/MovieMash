import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../../../App';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/dom';

describe('Series page', async () => {
    const queryClient = new QueryClient();
    it('renders series title', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/tv/1668']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findAllByText('Friends')).toBeDefined();
    });

    it('renders main information', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/tv/1668']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findByText('USA')).toBeDefined();
        expect(
            await screen.findByText('September 22, 1994 - May 6, 2004')
        ).toBeDefined();
        expect(await screen.findByText('Marta Kauffman')).toBeDefined();
        expect(await screen.findByText('David Crane')).toBeDefined();
        expect(await screen.findByText('Ended')).toBeDefined();
        expect(
            await screen.findByText(
                /Six young people from New York City, on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the/
            )
        ).toBeDefined();

        expect(await screen.findByText('327.184')).toBeDefined();
        expect(await screen.findByText('8')).toBeDefined();
        expect(await screen.findByText('.447')).toBeDefined();
    });

    it('renders cast and crew', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/tv/1668']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findByText('Jennifer Aniston')).toBeDefined();
        expect(await screen.findByText('Courteney Cox')).toBeDefined();
        expect(await screen.findByText('Greg J. Grande')).toBeDefined();
        expect(await screen.findByText('Joe Stewart')).toBeDefined();
    });

    it('renders seasons data', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/tv/1668']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findByText('Season 4')).toBeDefined();
        expect(await screen.findByText('September 25, 1997')).toBeDefined();
        expect(await screen.findAllByText(23)).toBeDefined();
    });

    it('renders next and prev similar series on button click', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/tv/1668']}>
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

        expect(
            await screen.findByText('The Knights of Prosperity')
        ).toBeDefined();

        fireEvent.click(next);
        expect(await screen.findByText('Red Dwarf')).toBeDefined();

        fireEvent.click(next);
        expect(await screen.findByText('The Geena Davis Show')).toBeDefined();

        fireEvent.click(prev);
        expect(await screen.findByText('Red Dwarf')).toBeDefined();
    });
});
