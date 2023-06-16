import { rest } from 'msw';
import { trendingMovieData } from './data/trendind-movie-data';
import { searchPageResuts } from './data/search-page-results';
import { oneMovieResult } from './data/one-movie';
import { castAndCrewMovie } from './data/cast-and-crew-movie';
import { similarMovies } from './data/similar-movies';
import { genresMovies } from './data/genres';
import { oneSeries } from './data/one-series';
import { similarSeries } from './data/similar-series';
import { castAndCrewSeries } from './data/cast-and-crew-series';
import { onePerson } from './data/one-person';
import { onePersonCredits } from './data/one-person-credits';

export const handlers = [
    rest.get(
        'https://api.themoviedb.org/3/search/multi?query=scrubs&include_adult=false&language=en-US&page=1',

        (req, res, ctx) => {
            return res(ctx.json(searchPageResuts));
        }
    ),

    //Movies' handlers
    rest.get(
        'https://api.themoviedb.org/3/trending/movie/day',

        (req, res, ctx) => {
            return res(ctx.json(trendingMovieData));
        }
    ),

    rest.get(
        'https://api.themoviedb.org/3/movie/:id',

        (req, res, ctx) => {
            return res(ctx.json(oneMovieResult));
        }
    ),

    rest.get(
        'https://api.themoviedb.org/3/movie/123/credits?language=en-US',

        (req, res, ctx) => {
            return res(ctx.json(castAndCrewMovie));
        }
    ),
    rest.get(
        'https://api.themoviedb.org/3/movie/123/similar?language=en-US&page=1',

        (req, res, ctx) => {
            return res(ctx.json(similarMovies));
        }
    ),

    rest.get(
        'https://api.themoviedb.org/3/genre/movie/list?language=en',

        (req, res, ctx) => {
            return res(ctx.json(genresMovies));
        }
    ),

    // TV shows' handlers

    rest.get(
        'https://api.themoviedb.org/3/tv/:id?language=en-US',

        (req, res, ctx) => {
            return res(ctx.json(oneSeries));
        }
    ),
    rest.get(
        'https://api.themoviedb.org/3/tv/1668/similar?language=en-US&page=1',

        (req, res, ctx) => {
            return res(ctx.json(similarSeries));
        }
    ),

    rest.get(
        'https://api.themoviedb.org/3/tv/1668/aggregate_credits',

        (req, res, ctx) => {
            return res(ctx.json(castAndCrewSeries));
        }
    ),

    // Handlers related to people

    rest.get(
        'https://api.themoviedb.org/3/person/5530?language=en-US',

        (req, res, ctx) => {
            return res(ctx.json(onePerson));
        }
    ),
    rest.get(
        'https://api.themoviedb.org/3/person/5530/combined_credits?language=en-US',

        (req, res, ctx) => {
            return res(ctx.json(onePersonCredits));
        }
    ),
];
