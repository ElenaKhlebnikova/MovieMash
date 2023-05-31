import "./App.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Header from "./layout/header";
import Landing from "./pages/landing/landing";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Landing />
    </QueryClientProvider>
  );
}

export default App;
