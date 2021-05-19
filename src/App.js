import './App.css';
import HelloCGU from './cgu_hello';
import Login from './login';
import background from "./Image003.jpeg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoRun from "./Todo"
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

const divStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",

  //width: "1200px",
  height: "800px",
  border: "0px",
  marginTop: "-80px",
}

function App(){
  return (
    <div className="App">
      <div style={divStyle}>
        {HelloCGU()}
        <div>
          <Router>
            <div>
              <Link to="/Todo">Todo</Link>
              <Link to="/">Login</Link>
            <hr />
            <Switch>
              <Route path="/" exact component={Login} />
				  	  <Route path="/Todo" component={TodoRun} />
            </Switch>
            </div>
          </Router>
         
					
        </div>
      </div>
    </div>
  );
}

export default App;