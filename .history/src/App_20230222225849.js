import Navbar from "./component/Navbar";
import Home
 from "./component/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
          <Routes>
          
          <Route exact path='/' element={<Home/>}> </Route>
          </Routes>
          </Router>
    </div>
  );
}

export default App;
