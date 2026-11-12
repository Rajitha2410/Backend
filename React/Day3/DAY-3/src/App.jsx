import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;