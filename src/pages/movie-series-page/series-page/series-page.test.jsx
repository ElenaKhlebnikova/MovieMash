import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import renderApp from '../../../tests/render-app.jsx';

describe('Series page', async () => {
    it('renders main information and seasons data', async () => {
        renderApp('/tv/1668');
        await screen.findAllByText('Friends');
        screen.debug;
        screen.getByText('USA');
        screen.getByText('September 22, 1994 - May 6, 2004');
        screen.getByText('Marta Kauffman');
        screen.getByText('David Crane');
        screen.getByText('Ended');
        screen.getByText(
            /Six young people from New York City, on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the/
        );

        screen.getByText('327.184');
        screen.getByText('8');
        screen.getByText('.447');
    });

    it('renders cast and crew', async () => {
        renderApp('/tv/1668');
        await screen.findByText('Jennifer Aniston');
        screen.getByText('Courteney Cox');
        screen.getByText('Greg J. Grande');
        screen.getByText('Joe Stewart');
        screen.getByText('Season 4');
        screen.getByText('September 25, 1997');
        screen.getAllByText(23);
    });

    it('renders next and prev similar series on button click', async () => {
        renderApp('/tv/1668');

        const next = screen.getByRole('button', {
            name: /→/,
        });
        const prev = screen.getByTestId('prev-item');

        await screen.findByText('The Knights of Prosperity');

        fireEvent.click(next);
        screen.getByText('Red Dwarf');

        fireEvent.click(next);
        screen.getByText('The Geena Davis Show');

        fireEvent.click(prev);
        screen.getByText('Red Dwarf');
    });
});
