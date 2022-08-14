import { Routes, Route } from "react-router-dom";
import { About } from "./components/about";
import { Home } from "./components/home";
import { NavBar } from "./components/NavBar";
import { OrderSummary } from "./components/OrderSummarry";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
