import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "components/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index  element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
