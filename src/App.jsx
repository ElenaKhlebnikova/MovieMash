import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Landing from "./pages/landing/landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieSeriesPage from "./pages/movie-series-page/movie-series-page";
import SearchResultsPage from "./pages/search/search-results-page";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/:id",
      element: <MovieSeriesPage />,
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
