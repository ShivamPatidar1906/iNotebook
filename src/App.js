import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import NoteState from './context/notes/NoteState';
import Alert from "./component/Alert";
import Login from "./component/Login";
import Signup from "./component/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import User from "./component/User";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);

      
  }
  return (
    <>
    <NoteState>
      <Router>
      <Navbar/>
      <Alert alert={alert}/>
      <div className="container">
          <Routes>
          <Route exact path='/' element={<Home showAlert={showAlert}/>}> </Route>
          <Route exact path='/User' element={<User showAlert={showAlert}/>}> </Route>
          <Route exact path='/About' element={<About/>}> </Route>
          <Route exact path='/login' element={<Login showAlert={showAlert}/>}> </Route>
          <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}> </Route>
          </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
  }
export default App;
