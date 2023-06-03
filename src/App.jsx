import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Landing from "./pages/landing/landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SearchResultsPage from "./pages/search/search-results-page";
import MoviePage from "./pages/movie-series-page/movie-page";
import SeriesPage from "./pages/movie-series-page/series-page";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    // This probably could work as I don't see you needed to dynamically set the media_type
    // with this solution, you don't need the middle page
    {
      path: "/movie/:id",
      element: <MoviePage />,
    },
    {
      path: "/tv/:id",
      element: <SeriesPage />,
    },
    {
      path: "/search/:value",
      element: <SearchResultsPage />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      {/* This can be changed like this, still works fine, I tested it locally */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
