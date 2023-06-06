import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Landing from "./pages/landing/landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResultsPage from "./pages/search/search-results-page";
import MoviePage from "./pages/movie-series-page/movie-page";
import SeriesPage from "./pages/movie-series-page/series-page";
import Person from "./pages/person-page/person";
import CastAll from "./pages/movie-series-page/cast-all";
import CrewAll from "./pages/movie-series-page/crew-all";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/movie/:id",
      element: <MoviePage />,
    },
    {
      path: "/tv/:id",
      element: <SeriesPage />,
    },
    {
      path: "/:media_type/:id/cast-and-crew/cast",
      element: <CastAll />,
    },
    {
      path: "/:media_type/:id/cast-and-crew/crew",
      element: <CrewAll />,
    },
    {
      path: "/people/:id",
      element: <Person />,
    },
    {
      path: "/search/:value",
      element: <SearchResultsPage />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <Landing />
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
