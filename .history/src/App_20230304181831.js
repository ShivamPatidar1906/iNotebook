import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import NoteState from './context/notes/NoteState';

import { Alert } from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <NoteState>
      <Router>
      <Navbar/>
      <div className="container">
          <Routes>
          <Route exact path='/' element={<Home/>}> </Route>
          <Route exact path='/About' element={<About/>}> </Route>
          </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
