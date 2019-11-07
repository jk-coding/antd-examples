import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <div>
    <div>
      <h1>Simple Routing Example</h1>
    </div>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/content" component={Content} />
      </div>
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>This is Home</p>
  </div>
);

const Info = () => (
  <div>
    <h2>Info</h2>
    <p>This is Info</p>
  </div>
);

const Content = () => (
  <div>
    <h2>Content</h2>
    <p>This is Content</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById("container"));
