import { BrowserRouter as Route, Router, Routes, NavLink } from "react-router-dom";
import {List} from "./List";
import {Single} from "./Single";
import {Create} from "./Create";
import "./App.css"

function App() {
  return (
    <Router>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/tip"} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Products</span>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={"/uj-tip"} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új termék</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/tip" exact element={<List />} />
        <Route path="/tip/:id" exact element={<Single />} />
        <Route path="/uj-tip" exact element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
