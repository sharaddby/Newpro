import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './Files/About';
import Api from './Files/Api';
import Billing from './Files/Billing';
import Cart from './Files/Cart';
import Contact from './Files/Contact';
import Conference from './Files/Conference';
import ConferenceTab from './Files/ConferenceTab';
import Forget from './Files/Forget';
import Footer from './Files/Footer';
import Faq from './Files/Faq';
import Home from './Files/Home';
import Navbar from './Files/Navbar';
import Privacy from './Files/Privacy';
import Register from './Files/Register';
import Conferencedetail from './Files/Conferencedetail';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
          <Switch>
            <Route path="/About" component={About}></Route>
            <Route path="/Api" component={Api}></Route>
            <Route path="/Billing" component={Billing}></Route>
            <Route path="/Credential" component={Credential}></Route>
            <Route path="/Cart" component={Cart}></Route>
            <Route path="/Contact" component={Contact}></Route>
            <Route path="/Conference" component={Conference}></Route>
            <Route path="/ConferenceTab" component={ConferenceTab}></Route>
            <Route path="/Forget" component={Forget}></Route>
            <Route path="/Faq" component={Faq}></Route>
            <Route path="/" exact component={Home} />
            <Route path="/Privacy" component={Privacy}></Route>
            <Route path="/Register" component={Register}></Route>
            <Route path="/Conferencedetail" component={Conferencedetail}></Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;