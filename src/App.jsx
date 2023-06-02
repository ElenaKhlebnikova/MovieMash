import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Landing from "./pages/landing/landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SearchResultsPage from "./pages/search/search-results-page";

import MiddlePage from "./pages/movie-series-page/middle-page";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/:media_type/:id",
      element: <MiddlePage />,
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
