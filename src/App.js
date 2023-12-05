import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Audit_Services from './Components/Audit_Services';
import Ans from './Components/Ans';
import a from './Components/a';
import About from './Components/About';
import Api from './Components/Api';
import Blog from './Components/Blog';
import Business_Solutions from './Components/Business_Solutions';
import Business from './Components/Business';
import Box from './Components/Box';
import Blogdtl from './Components/Blogdtl';
import Cpc from './Components/Cpc';
import Certified_Professional_Coder from './Components/Certified_Professional_Coder';
import Credential from './Components/Credential';
import Cart from './Components/Cart';
import Certifications from './Components/Certifications';
import Corporate_training from './Components/Corporate_training';
import Ceducation from './Components/Ceducation';
import ContinuingEdu from './Components/ContinuingEdu';
import Curriculum from './Components/Curriculum';
import Codes from './Components/Codes';
import Corporate from './Components/Corporate';
import Career from './Components/Career';
import corporate_membership from './Components/corporate_membership';
import Codingser from './Components/Codingser';
import Datafile from './Components/Datafile';
import Exam_Preparation from './Components/Exam_Preparation';
import Exam from './Components/Exam';
import Events from './Components/Events';
import Even from './Components/Even';
import exam_prep_deals from './Components/exam_prep_deals';
import Essentials from './Components/Essentials';
import Ebrief_build from './Components/Ebrief_build';
import Forget from './Components/Forget';
import Footer from './Components/Footer';
import Fundamentals_of_medicine_course from './Components/Fundamentals_of_medicine_course';
import group_webinars from './Components/group_webinars';
import Group_purchasing from './Components/Group_purchasing';
import Home from './Components/Home';
import IdentifyAreas from './Components/IdentifyAreas';
import Instructor from './Components/Instructor';
import Navbar from './Components/Navbar';
import Training from './Components/Training';
import Locate_examination from './Components/Locate_examination';
import Localchapter from './Components/Localchapter';
import Medicode from './Components/Medicode';
import Membership from './Components/Membership';
import Medical_coding from './Components/Medical_coding';
import medical_coding_education from './Components/medical_coding_education';
import Medi from './Components/Medi';
import Nexted from './Components/Nexted';
import Newsletter from './Components/Newsletter';
import Networking from './Components/Networking';
import Online_icd from './Components/Online_icd';
import Online_icd_10 from './Components/Online_icd_10';
import Online_code from './Components/Online_code';
import Professional from './Components/Professional';
import Practicode from './Components/Practicode';
import Practicod from './Components/Practicod';
import Package from './Components/Package';
import Publications from './Components/Publications';
import Prerequisites from './Components/Prerequisites';
import Riskcon from './Components/Riskcon';
import Register from './Components/Register';
import Resources from './Components/Resources';
import Support from './Components/Support';
import Supports from './Components/Supports';
import Shop from './Components/Shop';
import Subresources from './Components/Subresources';
import Signin from './Components/Signin';
import Slider from './Components/Slider';
import Tools from './Components/Tools';
import Talking from './Components/Talking';
import Webinars from './Components/Webinars';
import Workshops from './Components/Workshops';
import xtern_program from './Components/xtern_program';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
          <Switch>
            <Route path="/Audit_Services" component={Audit_Services}></Route>
            <Route path="/Ans" component={Ans}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/a" component={a}></Route>
            <Route path="/Api" component={Api}></Route>
            <Route path="/Blog" component={Blog}></Route>
            <Route path="/Business_Solutions" component={Business_Solutions}></Route>
            <Route path="/Box" component={Box}></Route>
            <Route path="/Blogdtl" component={Blogdtl}></Route>
            <Route path="/Certifications" component={Certifications} />
            <Route path="/Curriculum" component={Curriculum} />
            <Route path="/ContinuingEdu" component={ContinuingEdu} />
            <Route path="/Codes" component={Codes} />
            <Route path="/Corporate" component={Corporate}></Route>
            <Route path="/Career" component={Career}></Route>
            <Route path="/corporate_membership" component={corporate_membership}></Route>
            <Route path="/Codingser" component={Codingser}></Route>
            <Route path="/Cpc" component={Cpc}></Route>
            <Route path="/Certified_Professional_Coder" component={Certified_Professional_Coder}></Route>
            <Route path="/Credential" component={Credential}></Route>
            <Route path="/Cart" component={Cart}></Route>
            <Route path="/Ceducation" component={Ceducation}></Route>
            <Route path="/Datafile" component={Datafile}></Route>
            
            <Route path="/" exact component={Home} />
            <Route path="/Exam_Preparation" component={Exam_Preparation} />
            
            <Route path="/Training" component={Training}/>
            <Route path="/Locate_examination" component={Locate_examination} />
            <Route path="/Business" component={Business} />
            <Route path="/Instructor" component={Instructor} />
            
            <Route path="/Exam" component={Exam} />
            
            <Route path="/Professional" component={Professional} />
            <Route path="/Resources" component={Resources} />
            
            <Route path="/Essentials" component={Essentials}></Route>
            
            <Route path="/Tools" component={Tools}></Route>
            
            <Route path="/Practicode" component={Practicode}></Route>
           
            
            <Route path="/Medicode" component={Medicode}></Route>
            <Route path="/Webinars" component={Webinars}></Route>
            <Route path="/Events" component={Events}></Route>
            
            <Route path="/Even" component={Even}></Route>
            <Route path="/Publications" component={Publications}></Route>
            <Route path="/Support" component={Support}></Route>
            
            <Route path="/Supports" component={Supports}></Route>
            
            <Route path="/Prerequisites" component={Prerequisites}></Route>
            <Route path="/IdentifyAreas" component={IdentifyAreas}></Route>
            <Route path="/Shop" component={Shop}></Route>
            <Route path="/Group_purchasing" component={Group_purchasing}></Route>
            
            <Route path="/Fundamentals_of_medicine_course" component={Fundamentals_of_medicine_course}></Route>
            
            <Route path="/Membership" component={Membership}></Route>
            <Route path="/Medical_coding" component={Medical_coding}></Route>
            <Route path="/Slider" component={Slider}></Route>
            
            <Route path="/Ebrief_build" component={Ebrief_build}></Route>
            <Route path="/Package" component={Package}></Route>
          
            <Route path="/Nexted" component={Nexted}></Route>
            <Route path="/Talking" component={Talking}></Route>
            <Route path="/medical_coding_education" component={medical_coding_education}></Route>
            <Route path="/Online_icd" component={Online_icd}></Route>
            <Route path="/Online_icd_10" component={Online_icd_10}></Route>
            <Route path="/Online_code" component={Online_code}></Route>
            <Route path="/Medi" component={Medi}></Route>
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
