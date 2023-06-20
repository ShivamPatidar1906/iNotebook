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
          
          <Route exact path='/' element={<Home  setProgress={this.setProgress} pageSize={this.pageSize} key="science" bg={this.state.bg} category='science'/>}> </Route>
          </Routes>
          </Router>
    </div>
  );
}

export default App;
