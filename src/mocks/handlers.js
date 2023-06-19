import { rest } from 'msw';
import {
    castAndCrewMovie,
    castAndCrewSeries,
    genresMovies,
    oneMovieResult,
    onePersonCredits,
    onePerson,
    oneSeries,
    searchPageResuts,
    similarMovies,
    similarSeries,
    trendingMovieData,
} from './data';

export const handlers = [
    rest.get(
        'https://api.themoviedb.org/3/search/multi',

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
        'https://api.themoviedb.org/3/movie/123/credits',

        (req, res, ctx) => {
            return res(ctx.json(castAndCrewMovie));
        }
    ),
    rest.get(
        'https://api.themoviedb.org/3/movie/123/similar',

        (req, res, ctx) => {
            return res(ctx.json(similarMovies));
        }
    ),

    rest.get(
        'https://api.themoviedb.org/3/genre/movie/list',

        (req, res, ctx) => {
            return res(ctx.json(genresMovies));
        }
    ),

    // TV shows' handlers

    rest.get(
        'https://api.themoviedb.org/3/tv/:id',

        (req, res, ctx) => {
            return res(ctx.json(oneSeries));
        }
    ),
    rest.get(
        'https://api.themoviedb.org/3/tv/1668/similar',

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
        'https://api.themoviedb.org/3/person/5530',

        (req, res, ctx) => {
            return res(ctx.json(onePerson));
        }
    ),
    rest.get(
        'https://api.themoviedb.org/3/person/5530/combined_credits',

        (req, res, ctx) => {
            return res(ctx.json(onePersonCredits));
        }
    ),
];
