import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Temp from "./pages/Temp/Temp";
import Length from "./pages/length/Length";

function App() {
  return (
    <Router>
    <div className="App container">
      <NavBar />
      <Routes>
      <Route path="/" element={<Temp/>}></Route>
      <Route path="/length" element={<Length/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
