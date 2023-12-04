import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Audit_Services from './Components/Audit_Services';
import Ans from './Components/Ans';
import a from './Components/a';
import About from './Components/About';
import Blog from './Components/Blog';
import Business_Solutions from './Components/Business_Solutions';
import Box from './Components/Box';
import Blogdtl from './Components/Blogdtl';
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
import Tools from './Components/Tools';
import Practicode from './Components/Practicode';
import Datafile from './Components/Datafile';
import corporate_membership from './Components/corporate_membership';
import Medicode from './Components/Medicode';
import Webinars from './Components/Webinars';
import Events from './Components/Events';
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
import Membership from './Components/Membership';
import Medical_coding from './Components/Medical_coding';
import Slider from './Components/Slider';
import Ceducation from './Components/Ceducation';
import Ebrief_build from './Components/Ebrief_build';
import Package from './Components/Package';
import Cart from './Components/Cart';
import Nexted from './Components/Nexted';
import Talking from './Components/Talking';
import medical_coding_education from './Components/medical_coding_education';
import Online_icd from './Components/Online_icd';
import Online_icd_10 from './Components/Online_icd_10';
import Online_code from './Components/Online_code';
import Medi from './Components/Medi';
import Workshops from './Components/Workshops';
import Newsletter from './Components/Newsletter';
import Riskcon from './Components/Riskcon';
import Localchapter from './Components/Localchapter';
import Networking from './Components/Networking';
import Corporate_training from './Components/Corporate_training';
import Subresources from './Components/Subresources';
import Practicod from './Components/Practicod';
import xtern_program from './Components/xtern_program';
import group_webinars from './Components/group_webinars';
import exam_prep_deals from './Components/exam_prep_deals';
import Register from './Components/Register';
import Signin from './Components/Signin';
import Forget from './Components/Forget';
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
            <Route path="/Nexted" component={Nexted}></Route>
            <Route path="/Talking" component={Talking}></Route>
            <Route path="/medical_coding_education" component={medical_coding_education}></Route>
            <Route path="/Online_icd" component={Online_icd}></Route>
            <Route path="/Online_icd_10" component={Online_icd_10}></Route>
            <Route path="/Online_code" component={Online_code}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/Medi" component={Medi}></Route>
            <Route path="/a" component={a}></Route>
            <Route path="/Workshops" component={Workshops}></Route>
            <Route path="/Newsletter" component={Newsletter}></Route>
            <Route path="/Riskcon" component={Riskcon}></Route>
            <Route path="/Localchapter" component={Localchapter}></Route>
            <Route path="/Networking" component={Networking}></Route>
            <Route path="/Corporate_training" component={Corporate_training}></Route>
            <Route path="/Subresources" component={Subresources}></Route>
            <Route path="/Practicod" component={Practicod}></Route>
            <Route path="/xtern_program" component={xtern_program}></Route>
            <Route path="/group_webinars" component={group_webinars}></Route>
            <Route path="/exam_prep_deals" component={exam_prep_deals}></Route>
            <Route path="/Register" component={Register}></Route>
            <Route path="/Signin" component={Signin}></Route>
            <Route path="/Forget" component={Forget}></Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
