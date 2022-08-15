import { Routes, Route } from "react-router-dom";
import { About } from "./components/about";
import { Featured } from "./components/Featured";
import { Home } from "./components/home";
import { NavBar } from "./components/NavBar";
import { New } from "./components/New";
import { NoMatch } from "./components/NoMatch";
import { OrderSummary } from "./components/OrderSummarry";
import { Products } from "./components/Products";
import { UserDetails } from "./components/UserDetails";
import { Users } from "./components/Users";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element="featured"></Route>
          <Route path="featured" element={<Featured />}></Route>
          <Route path="new" element={<New />}>
            New
          </Route>
        </Route>
        <Route path="users" element={<Users />}>
          <Route path="users/:userId" element={<UserDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
