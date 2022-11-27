import Example from "./pages/Example/Example";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";

import { Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/example" element={<Example/>} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      
    </Routes>

  );
}

export default App;
