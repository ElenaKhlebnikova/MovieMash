import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import renderApp from '../../tests/render-app';

describe('Landing', async () => {
    // it('renders movie data correctly', async () => {
    //     renderApp('/');

    //     await screen.findByText('Fast X');

    //     screen.getByText('7');
    //     screen.getByText('.372');
    // });

    it('shows search results when typing', async () => {
        renderApp('/');

        await screen.findByText(
            'MovieMash: Where you meet your perfect movie match!'
        );

        const searchBar = screen.getByRole('textbox');
        fireEvent.change(searchBar, { target: { value: 'scrubs' } });
        expect(searchBar.value).toBe('scrubs');

        await screen.findByText('Scrubs');
        screen.getByText('Scrubs: Interns');
        screen.getByText('Wormwood Scrubs');
    });
});
