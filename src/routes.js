import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Aboult";
import Header from "./components/Header";
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
