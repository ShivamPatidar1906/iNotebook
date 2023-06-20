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
          <Route exact path='/' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="home" bg={this.state.bg} category='general'/>}> </Route> 
          <Route exact path='/business' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="business" bg={this.state.bg} category='business'/>}> </Route>
          <Route exact path='/sports' element={ <News  setProgress={this.setProgress} pageSize={this.pageSize} key="sports" bg={this.state.bg} category='sports'/>}></Route>
          <Route exact path='/general' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="general" bg={this.state.bg} category='general'/>}> </Route>
          <Route exact path='/entertainment' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="entertainment" bg={this.state.bg} category='entertainment'/>}> </Route>
          <Route exact path='/health' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="health" bg={this.state.bg} category='health'/>}> </Route>
          <Route exact path='/technology' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="technology" bg={this.state.bg} category='technology'/>}> </Route>
          <Route exact path='/science' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="science" bg={this.state.bg} category='science'/>}> </Route>
          </Routes>
          </Router>
    </div>
  );
}

export default App;
