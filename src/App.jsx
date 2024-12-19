import { BrowserRouter, Route, Routes } from "react-router-dom";
import CWeb from "./Pages/MyServer/CWeb";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import OneDoc from "./Pages/MyServer/OneDoc";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<CWeb /> } />
        <Route path="/Document/:file" element={<OneDoc /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}