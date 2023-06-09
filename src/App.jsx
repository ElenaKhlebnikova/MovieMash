import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Landing from './pages/landing/landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchResultsPage from './pages/search/search-results-page';
import MoviePage from './pages/movie-series-page/movie-page/movie-page';
import SeriesPage from './pages/movie-series-page/series-page/series-page';
import Person from './pages/cast-and-crew/person-page/person-profile';
import CastAll from './pages/cast-and-crew/cast-all';
import CrewAll from './pages/cast-and-crew/crew-all';

function App() {
    const queryClient = new QueryClient();

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Landing />,
        },
        {
            path: '/movie/:id',
            element: <MoviePage />,
        },
        {
            path: '/tv/:id',
            element: <SeriesPage />,
        },

        //If I do it the way it was suggested then I'll have to add 4 routes:
        // 1) /tv/:id/cast-and-crew/cast
        //2) /tv/:id/cast-and-crew/crew
        //3) /movie/:id/cast-and-crew/cast
        //4) /movie/:id/cast-and-crew/crew
        // understood then change the above as well so it can stay consistent :)

        {
            path: '/:media_type/:id/cast-and-crew/cast',
            element: <CastAll />,
        },
        {
            path: '/:media_type/:id/cast-and-crew/crew',
            element: <CrewAll />,
        },
        {
            path: '/people/:id',
            element: <Person />,
        },
        {
            path: '/search/:value',
            element: <SearchResultsPage />,
        },
    ]);
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;
