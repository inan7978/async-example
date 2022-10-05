import logo from "./logo.svg";
import "./App.css";

function App() {
  function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, 2000);
    });
  }

  async function asyncCall() {
    let temp = "";
    console.log("calling");
    const result = await resolveAfter2Seconds();
    temp = result;
    console.log(temp);
    // expected output: "resolved"
  }

  asyncCall();

  return (
    <div className="App">
      <div className="nav-bar-side">
        <div className="logo-container nav-bar-containers">
          <h3>logo</h3>
        </div>
        <div className="options-container nav-bar-containers">
          <h3>options</h3>
        </div>
        <div className="bottom-container nav-bar-containers">
          <h3>bottom</h3>
        </div>
      </div>
      <div className="main-screen">
        <div className="main-contents">
          <div className="tester"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
