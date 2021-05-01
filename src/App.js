import './App.css';
import HelloCGU from './cgu_hello';
import Login from './login';
import background from "./Image003.jpeg";

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
          {Login()}
        </div>
      </div>
    </div>
  );
}

export default App;
