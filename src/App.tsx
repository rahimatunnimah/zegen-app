import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Invoice from "./pages/Invoice/Invoice";
import Kanban from "./pages/Kanban/Kanban";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kanban" element={<Kanban/>} />
      <Route path="/invoice" element={<Invoice/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
