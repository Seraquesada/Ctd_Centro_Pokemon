import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from 'react-query/devtools'
import {QueryClient, QueryClientProvider,} from "react-query"
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";

function App() {
  const queryClient = new QueryClient()
  return (
      <QueryClientProvider client ={queryClient}>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/formularioIngreso" element={<Formulario />} />
          </Routes>
        </div>
        <ReactQueryDevtools initialIsOpen={true} />

      </QueryClientProvider>
  );
}

export default App;
