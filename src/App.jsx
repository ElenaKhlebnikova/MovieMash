import Landing from './pages/landing/landing';
import SearchResultsPage from './pages/search/search-results-page';
import MoviePage from './pages/movie-series-page/movie-page/movie-page';
import SeriesPage from './pages/movie-series-page/series-page/series-page';
import Person from './pages/cast-and-crew/person-page/person-profile';
import CastAll from './pages/cast-and-crew/cast-all';
import CrewAll from './pages/cast-and-crew/crew-all';
import { Routes, Route } from 'react-router-dom';

const App = () => (
    //comment to check ci
    <div>
        <Routes>
            <Route path="/" element={<Landing />} />

            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/tv/:id" element={<SeriesPage />} />
            <Route
                path="/:media_type/:id/cast-and-crew/cast"
                element={<CastAll />}
            />
            <Route
                path="/:media_type/:id/cast-and-crew/crew"
                element={<CrewAll />}
            />
            <Route path="/people/:id" element={<Person />} />
            <Route path="/search/:value" element={<SearchResultsPage />} />
        </Routes>
    </div>
);

export default App;
