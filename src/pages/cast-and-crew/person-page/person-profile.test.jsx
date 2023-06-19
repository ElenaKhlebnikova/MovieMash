import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../../../App';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/dom';

describe('Person profile', async () => {
    const queryClient = new QueryClient();
    it('renders name', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/people/5530']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findAllByText('James McAvoy')).toBeDefined();
    });

    it('renders main information', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/people/5530']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findByText(/Glasgow, Scotland, UK/)).toBeDefined();
        expect(await screen.findByText(/April 21, 1979/)).toBeDefined();
        expect(await screen.findByText(/26.349/)).toBeDefined();
    });

    it('Shows biography on clicking "Biography"', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/people/5530']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        const biography = await screen.findByText('Biography');
        expect(biography).toBeDefined();
        fireEvent.click(biography);

        expect(
            await screen.findByText(/and appeared mostly on television/i)
        ).toBeDefined();
    });

    it('Shows all projects the person starred in', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/people/5530']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findByText('Strings')).toBeDefined();
        expect(await screen.findByText(/^Inside/)).toBeDefined();
    });

    it('Shows all projects the person took part in as a crew member', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/people/5530']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(await screen.findByText('50/50')).toBeDefined();
        expect(await screen.findByText('Filth')).toBeDefined();
    });

    it('Filters projects as cast based on the input value', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/people/5530']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        await screen.findByText('Strings');
        const castSelect = screen.getByTestId('test-select-cast');

        fireEvent.change(castSelect, { target: { value: 'tv' } });
        expect(castSelect).toBeDefined();
        expect(await screen.findByText(/Foyle's War/)).toBeDefined();

        // query again when you expect an element that was already found to be not found
        // query returns null
        // always query again and not use the same variable
        expect(screen.queryByText('Strings')).toBeNull();
    });

    it('Filters projects as crew based on the input value', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/people/5530']}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        const testMovie = await screen.findByText('50/50');
        const crewSelect = screen.getByTestId('test-select-crew');

        fireEvent.change(crewSelect, { target: { value: 'tv' } });
        expect(crewSelect).toBeDefined();
        expect(testMovie).toBeNull;
    });
});
