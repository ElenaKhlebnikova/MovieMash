import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import renderApp from '../../../tests/render-app';

describe('Movie page', async () => {
    it('renders main information and genres', async () => {
        renderApp('/movie/123');

        await screen.findAllByText('The Lord of the Rings');

        screen.getByText('4M');
        screen.getByText('3B');
        screen.getByText('Released');
        screen.getByText('November 15, 1978');
        screen.getByText('6');
        screen.getByText('.56');
        screen.getByText(
            /The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron/
        );

        screen.getByText('21.747');

        await screen.findByText('Romance');
        screen.getByText('Comedy');
    });

    it('renders cast and crew', async () => {
        renderApp('/movie/123');

        await screen.findByText('Christopher Guard');
        screen.getByText('William Squire');
        screen.getByText('Saul Zaentz');
        screen.getByText('J.R.R. Tolkien');
    });

    it('renders similar movies and renders next and prev similar movies on button click', async () => {
        renderApp('/movie/123');

        await screen.findByText('Sebuah Seni untuk Memahami Kekasih');
        const next = screen.getByRole('button', {
            name: /→/,
        });
        //Getting bt test ID as the left arrow is already used for go back btn
        //so this way it is sure that the right button is found

        const prev = screen.getByTestId('prev-item');

        fireEvent.click(next);
        screen.getByText('Chorabali');

        fireEvent.click(next);
        screen.getByText('Seven Elements');

        fireEvent.click(next);
        screen.getByText('The Day of the Locust');

        fireEvent.click(prev);
        screen.getByText('Seven Elements');
    });
});
