import Business from "./component/Business";
import Promo from "./component/promo";
import "./index.css";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <div className="mt-24">
        <Promo />
      </div>
      <div className="mt-24">
        <Business />
      </div>
    </>
  );
}

export default App;
