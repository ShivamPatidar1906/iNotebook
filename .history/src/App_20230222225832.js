import Navbar from "./component/Navbar";
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
