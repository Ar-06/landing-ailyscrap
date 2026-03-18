import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../components/features/scroll-top";
import Layout from "../layouts/Layout";
import About from "../pages/About";
import Catalog from "../pages/Catalog";
import Categories from "../pages/Categories";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
