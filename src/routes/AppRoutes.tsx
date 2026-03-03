import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../layouts/Layout"
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"
import About from "../pages/About"


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/about" element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}