import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import renderApp from '../../../tests/render-app';

describe('Person profile', async () => {
    it('renders main information', async () => {
        renderApp('/people/5530');

        expect(await screen.findAllByText('James McAvoy')).toBeDefined();
        expect(screen.getByText(/Glasgow, Scotland, UK/)).toBeDefined();
        expect(screen.getByText(/April 21, 1979/)).toBeDefined();
        expect(screen.getByText(/26.349/)).toBeDefined();
    });

    it('Shows biography on clicking "Biography"', async () => {
        renderApp('/people/5530');

        const biography = await screen.findByText('Biography');
        fireEvent.click(biography);
        screen.getByText(/and appeared mostly on television/i);
    });

    it('Shows all projects the person starred in and took part as a member of the crew', async () => {
        renderApp('/people/5530');

        await screen.findByText('Strings');
        screen.getByText(/^Inside/);
        screen.getByText('50/50');
        screen.getByText('Filth');
    });

    it('Filters projects as cast and crew based on the input value', async () => {
        renderApp('/people/5530');

        //CAST

        await screen.findByText('Strings');
        const castSelect = screen.getByTestId('test-select-cast');
        fireEvent.change(castSelect, { target: { value: 'tv' } });
        screen.getByText(/Foyle's War/);
        expect(screen.queryByText('Strings')).toBeNull();

        //CREW

        screen.getByText('50/50');
        const crewSelect = screen.getByTestId('test-select-crew');
        fireEvent.change(crewSelect, { target: { value: 'tv' } });
        expect(screen.queryByText('50/50')).toBeNull();
    });
});
