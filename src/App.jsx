import { BrowserRouter, Route, Routes } from "react-router-dom";
import CWeb from "./Pages/MyServer/CWeb";
import Nav from "./components/Nav";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<CWeb /> } />
      </Routes>
    </BrowserRouter>
  )
}