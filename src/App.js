import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import * as ROUTES from "./constants/routes/routes";
import Home from "./pages/Home";
import { Navbar } from "./components/Navigation/Navbar";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
