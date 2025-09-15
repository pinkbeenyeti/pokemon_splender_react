import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Router from "./router/Router";
import "./App.css";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
