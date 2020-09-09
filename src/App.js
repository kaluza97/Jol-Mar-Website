import React from "react";
import "./Components/Styles/App.scss";
import Menu from "./Components/menu";
import MainPage from "./Components/mainPage";
import Offer from "./Components/offer";
import Gallery from "./Components/gallery";
import Contact from "./Components/contact";
import AboutUs from "./Components/aboutUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu></Menu>
        <Switch>
          <Route path="/" exact={true} component={MainPage}></Route>
          <Route path="/Offer" component={Offer}></Route>
          <Route path="/Gallery" component={Gallery}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/AboutUs" component={AboutUs}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
