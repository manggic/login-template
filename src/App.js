import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Carousel } from "antd";
import SignInFirst from "./signInComponent/SignInFirst";
import SignInSecond from "./signInComponent/SignInSecond";
import SignInThree from "./signInComponent/SignInThree";

const comp = [SignInFirst, SignInSecond, SignInThree];

function App() {
  const contentStyle = {
    height: "90vh",
    color: "black",
    // lineHeight: "160px",
    textAlign: "center",
  };

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const signInCard = (Component) => {
    return (
      <div>
        <div style={contentStyle}>
          <Component />
        </div>
      </div>
    );
  };

  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      {/* <a
        href="https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png"
        download
        onClick={(e) => download(e)}
      >
        <i className="fa fa-download" />
        download
      </a> */}
      <div>
        <Carousel afterChange={onChange}>
          {comp.map((comp) => {
            return signInCard(comp);
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
