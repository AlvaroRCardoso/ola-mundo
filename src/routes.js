import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Aboult";
import Header from "./components/Header";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/"  element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Route>
        
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
