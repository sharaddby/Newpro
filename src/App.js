import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Exam_Preparation from './Components/Exam_Preparation';
import Certifications from './Components/Certifications';
import Training from './Components/Training';
import Locate_examination from './Components/Locate_examination';
import Business from './Components/Business';
import Instructor from './Components/Instructor';
import Curriculum from './Components/Curriculum';
import Exam from './Components/Exam';
import ContinuingEdu from './Components/ContinuingEdu';
import Professional from './Components/Professional';
import Resources from './Components/Resources';
import Codes from './Components/Codes';
import Essentials from './Components/Essentials';
import Corporate from './Components/Corporate';
import Career from './Components/Career';
import Blog from './Components/Blog';
import Business_Solutions from './Components/Business_Solutions';
import Tools from './Components/Tools';
import Audit_Services from './Components/Audit_Services';
import Practicode from './Components/Practicode';
import Datafile from './Components/Datafile';
import corporate_membership from './Components/corporate_membership';
import Medicode from './Components/Medicode';
import Webinars from './Components/Webinars';
import Events from './Components/Events';
import Ans from './Components/Ans';
import Even from './Components/Even';
import Publications from './Components/Publications';
import Support from './Components/Support';
import Codingser from './Components/Codingser';
import Supports from './Components/Supports';
import Cpc from './Components/Cpc';
import Prerequisites from './Components/Prerequisites';
import IdentifyAreas from './Components/IdentifyAreas';
import Shop from './Components/Shop';
import Group_purchasing from './Components/Group_purchasing';
import Certified_Professional_Coder from './Components/Certified_Professional_Coder';
import Fundamentals_of_medicine_course from './Components/Fundamentals_of_medicine_course';
import Credential from './Components/Credential';
import Box from './Components/Box';
import Membership from './Components/Membership';
import Medical_coding from './Components/Medical_coding';
import Slider from './Components/Slider';
import Blogdtl from './Components/Blogdtl';
import Ceducation from './Components/Ceducation';
import Ebrief_build from './Components/Ebrief_build';
import Package from './Components/Package';
import Cart from './Components/Cart';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Exam_Preparation" component={Exam_Preparation} />
            <Route path="/Certifications" component={Certifications} />
            <Route path="/Training" component={Training}/>
            <Route path="/Locate_examination" component={Locate_examination} />
            <Route path="/Business" component={Business} />
            <Route path="/Instructor" component={Instructor} />
            <Route path="/Curriculum" component={Curriculum} />
            <Route path="/Exam" component={Exam} />
            <Route path="/ContinuingEdu" component={ContinuingEdu} />
            <Route path="/Professional" component={Professional} />
            <Route path="/Resources" component={Resources} />
            <Route path="/Codes" component={Codes} />
            <Route path="/Essentials" component={Essentials}></Route>
            <Route path="/Corporate" component={Corporate}></Route>
            <Route path="/Career" component={Career}></Route>
            <Route path="/Blog" component={Blog}></Route>
            <Route path="/Business_Solutions" component={Business_Solutions}></Route>
            <Route path="/Tools" component={Tools}></Route>
            <Route path="/Audit_Services" component={Audit_Services}></Route>
            <Route path="/Practicode" component={Practicode}></Route>
            <Route path="/Datafile" component={Datafile}></Route>
            <Route path="/corporate_membership" component={corporate_membership}></Route>
            <Route path="/Medicode" component={Medicode}></Route>
            <Route path="/Webinars" component={Webinars}></Route>
            <Route path="/Events" component={Events}></Route>
            <Route path="/Ans" component={Ans}></Route>
            <Route path="/Even" component={Even}></Route>
            <Route path="/Publications" component={Publications}></Route>
            <Route path="/Support" component={Support}></Route>
            <Route path="/Codingser" component={Codingser}></Route>
            <Route path="/Supports" component={Supports}></Route>
            <Route path="/Cpc" component={Cpc}></Route>
            <Route path="/Prerequisites" component={Prerequisites}></Route>
            <Route path="/IdentifyAreas" component={IdentifyAreas}></Route>
            <Route path="/Shop" component={Shop}></Route>
            <Route path="/Group_purchasing" component={Group_purchasing}></Route>
            <Route path="/Certified_Professional_Coder" component={Certified_Professional_Coder}></Route>
            <Route path="/Fundamentals_of_medicine_course" component={Fundamentals_of_medicine_course}></Route>
            <Route path="/Credential" component={Credential}></Route>
            <Route path="/Box" component={Box}></Route>
            <Route path="/Membership" component={Membership}></Route>
            <Route path="/Medical_coding" component={Medical_coding}></Route>
            <Route path="/Slider" component={Slider}></Route>
            <Route path="/Blogdtl" component={Blogdtl}></Route>
            <Route path="/Ceducation" component={Ceducation}></Route>
            <Route path="/Ebrief_build" component={Ebrief_build}></Route>
            <Route path="/Package" component={Package}></Route>
            <Route path="/Cart" component={Cart}></Route>
           </Switch>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
