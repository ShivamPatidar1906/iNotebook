import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <
      <Router>
      <Navbar/>
          <Routes>
          <Route exact path='/' element={<Home/>}> </Route>
          <Route exact path='/About' element={<About/>}> </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
