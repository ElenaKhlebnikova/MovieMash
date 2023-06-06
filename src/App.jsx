import "./App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Landing from "./pages/landing/landing"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SearchResultsPage from "./pages/search/search-results-page"
import MoviePage from "./pages/movie-series-page/movie-page"
import SeriesPage from "./pages/movie-series-page/series-page"
import Person from "./pages/cast-and-crew/person-page/person-profile"
import CastAll from "./pages/cast-and-crew/cast-all"
import CrewAll from "./pages/cast-and-crew/crew-all"

function App() {
  const queryClient = new QueryClient()

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
      // this should work fine
      path: "/movie/:id/cast-and-crew/cast",
      element: <CastAll />,
    },
    {
      path: "/tv/:id/cast-and-crew/cast",
      element: <CastAll />,
    },
    {
      path: "/movie/:id/cast-and-crew/crew",
      element: <CrewAll />,
    },
    {
      path: "/tv/:id/cast-and-crew/crew",
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
  ])
  return (
    <QueryClientProvider client={queryClient}>
      {/* the first route in the definition matches the lading page so you don't need as children of RouterProvider */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
