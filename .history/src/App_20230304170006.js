import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import NoteState from "./context/notes/notesState";
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
          <Route exact path='/About' element={<About/>}> </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
