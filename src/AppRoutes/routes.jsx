import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Homepage";
import Temple from "../Pages/Temples/Templespage";
import ArtAndCraft from "../Pages/ArtAndCraft/ArtAndCraftPage";
import Nature from "../Pages/Natural-View/naturalview";
import Contact from "../Pages/Contact/contact.jsx";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temples" element={<Temple/>} />
        <Route path="/artandcraft" element={<ArtAndCraft/>} />
        <Route path="/naturalview" element={<Nature/>} />
        <Route path="/contact" element={<Contact/>} />       
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
