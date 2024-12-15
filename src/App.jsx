import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/homePage";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
