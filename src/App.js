import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
