import Landing from './pages/landing/landing';
import SearchResultsPage from './pages/search/search-results-page';
import MoviePage from './pages/movie-series-page/movie-page/movie-page';
import SeriesPage from './pages/movie-series-page/series-page/series-page';
import Person from './pages/cast-and-crew/person-page/person-profile';
import CastAll from './pages/cast-and-crew/cast-all';
import CrewAll from './pages/cast-and-crew/crew-all';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/header';
import ExploreMoviesPage from './pages/explore-page/explore-movies-page';

const App = () => (
    <div>
        <Routes>
            <Route path="/" element={<Landing />} />

            <Route
                path="/movie/:id"
                element={
                    <>
                        <Header />
                        <MoviePage />
                    </>
                }
            />
            <Route
                path="/tv/:id"
                element={
                    <>
                        <Header />
                        <SeriesPage />
                    </>
                }
            />
            <Route
                path="/:media_type/:id/cast-and-crew/cast"
                element={
                    <>
                        <Header />
                        <CastAll />
                    </>
                }
            />
            <Route
                path="/:media_type/:id/cast-and-crew/crew"
                element={
                    <>
                        <Header />
                        <CrewAll />
                    </>
                }
            />
            <Route
                path="/people/:id"
                element={
                    <>
                        <Header />
                        <Person />
                    </>
                }
            />
            <Route
                path="/search/:value"
                element={
                    <>
                        <Header />
                        <SearchResultsPage />
                    </>
                }
            />
            <Route
                path="/explore-movies"
                element={
                    <>
                        <Header />
                        <ExploreMoviesPage />
                    </>
                }
            />
        </Routes>
    </div>
);

export default App;
