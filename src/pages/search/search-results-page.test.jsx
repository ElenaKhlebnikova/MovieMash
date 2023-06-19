import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import renderApp from '../../tests/render-app';

describe('Search page results', async () => {
    it('renders search results names, ratings and show more btn', async () => {
        renderApp('/search/scrubs');

        await screen.findByText('Scrubs');
        screen.getByText('Scrubs: Interns');
        screen.getByText('Wormwood Scrubs');
        screen.getByText('5');
        screen.getByText('.667');
        screen.getAllByRole('button', {
            name: /Show more/i,
        });
    });
});
