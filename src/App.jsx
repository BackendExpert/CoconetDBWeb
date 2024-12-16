import { BrowserRouter, Route, Routes } from "react-router-dom";
import CWeb from "./Pages/MyServer/CWeb";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CWeb /> } />
      </Routes>
    </BrowserRouter>
  )
}