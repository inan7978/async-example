import "./App.css";
import Home from "./Home";

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
          <img
            className="main-logo"
            alt="main-logo"
            onClick={() => console.log("Image clicked.")}
            src={require("./simple-logo.png")}
          />
        </div>
        <div className="options-container nav-bar-containers">
          <button className="link-btns">About</button>
          <button className="link-btns">Skills</button>
          <button className="link-btns">Projects</button>
          <button className="link-btns">Contact Me</button>
        </div>
        <div className="bottom-container nav-bar-containers">
          <button>Resume</button>
          <a
            href="https://www.linkedin.com/in/inan-ismailov-86a893123"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/inan7978/" target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="main-screen">
        <div className="main-contents">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
