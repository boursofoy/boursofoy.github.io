import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Signup from "./pages/Signup";
import ExParty from "./pages/ExParty";

Modal.setAppElement("#root");


const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/tarifs" component={Pricing}/>
            <Route exact path="/contact" component={ContactUs}/>
            <Route exact path="/soiree-type" component={ExParty}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/devis" component={Signup}/>

        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));