# 🍿MovieMash

Welcome to MovieMash repository! This is a web-application which allows users to view different movies, tv-shows, see their rating, production, cast, crew and popularity.
It also allows users to view actors and producers' biography, filmography and their popularity.

Here is the [preview link](https://startling-travesseiro-2774de.netlify.app/).

The project is using [The Movie Database](https://developer.themoviedb.org) API.

## 🏗️ Tech Stack

MovieMash is built with the following tech stack:

| Technology            | Usage                                                     |
| --------------------- | --------------------------------------------------------- |
| React                 | Main framework for building the application               |
| React Router          | Navigation and routing within the application             |
| React Query           | To handle data fetching and caching                       |
| Taiwind               | CSS framework for building UI                             |
| GitHub Actions        | To test and deploy the application (2 separate workflows) |
| ESLint/Prettier/Husky | For linting/formatting/Git-hooks                          |
| Jest & RTL            | To write unit and integration tests                       |
| Mock Service Worker   | To mock requests during testing                           |
| Vite                  | Development environment (local dev server and building)   |

## 👀 Project Overview

Click [here](https://startling-travesseiro-2774de.netlify.app/) to view the project.

![MovieMash main](https://i.ibb.co/SdXHdr6/image.png)

![MovieMash trending slider](https://i.ibb.co/3M9StCp/image.png)
![MovieMash explore movies page](https://i.ibb.co/qCT4bsp/image.png)
![MovieMash movie page](https://i.ibb.co/c19kS7Z/image.png)

![MovieMash person page](https://i.ibb.co/Q9wKxP9/image.png)
![MovieMash responsive slider](https://i.ibb.co/X44Mnpz/image.png)

## 🎥 Features

1. Fully responsive.
2. Filtering: users can filter TV shows and movies based on genres, rating and country.
3. Sorting: users can sort TV shows and movies by their rating and release date.
4. Trending today/this week slider. Users can see what TV shows and Movies are popular now.
5. Main picture changes every day based on the most trending movie.
6. Users can view different people and see their brief biography and view movies and TV shows they've starred in or worked as a part of the crew.
7. Slider for trending/similar movies/TV shows is fully responsive.
8. Users can search for movies/TV shows on the main page.

## 📖What I have learnt

1. Using React Router v6.11 to implement navigation between different pages.
2. Using React Query to fetch data using multiple queries.
3. Using The Movie Database which requires token authentication.
4. How to work with different endpoints provided by The Movie Database.
5. How to build features in smaller PRs and avoid pushing to main.
6. How to use RTL to write integration tests that span multiple components.
7. How to use Tailwind to build responsive UI much faster.
8. Improved CSS skills.
9. How to work with env variables locally (.env files) and on deployment platform (Netlify).

## 😭 What I struggled with

1. Using React Query for the first time mainly because their documentation was confusing at first.
2. Building complicated filtering functionality for "Explore Movies" and "Explore TV shows" pages.
3. Although the biggest part of the project is built using Tailwind, custom CSS was still required to animate the slider component and build [rating range](https://i.ibb.co/W6bTXGW/image.png) component when exploring movies or TV shows.
