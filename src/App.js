import React from 'react';
import Homepage from './Pages/homepage';
import Admin from './Pages/admin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './Pages/About Us';
import PopularCourses from './Pages/Popular course';
import Faculties from './Pages/Faculties';
import FAQs from './Pages/FAQs';
import MigrationService from './Pages/Migration Service';
import StudentService from './Pages/Student Services';
import StudentTestimonials from './Pages/Studnet Testimonials';
import Blog from './Pages/Blog';
import Events from './Pages/Events';
import Webinar from './Pages/Webinar';
import BusinessAnalytics from './component/courses/BusinessAnalytics';
import BusinessStudies from './component/courses/Course Page/BusinessStudies';
import ArchitectureAndBuilding from './component/courses/Course Page/ArchitectureAndBuilding';
import Engineering from './component/courses/Course Page/Engineering';
import FandHospitality from './component/courses/Course Page/Food&Hospitality';
import HandAHealth from './component/courses/Course Page/Health&AlliedHealth';
import HandSScience from './component/courses/Course Page/HumanitiesAndSocialScience';
import InformationTechnology from './component/courses/Course Page/InformationTechnology';
import Science from './component/courses/Course Page/Science';
import ArtDesign from './component/courses/Course Page/artDesign';
import Law from './component/courses/Course Page/law';
import Education from './component/courses/Course Page/Education';
import Nursing from './component/courses/component/mainpage/nursing';


function App() {
  return (
    
    
    <div className='App'>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/homepage' component={Homepage} />
      <Route exact path='/Admin' component={Admin} />
      <Route exact path='/About Us' component={AboutUs} />
      <Route exact path='/Popular Course' component={PopularCourses} />
      <Route exact path='/Faculties' component={Faculties} />
      <Route exact path='/FAQs' component={FAQs} />
      <Route exact path='/Migration Services' component={MigrationService} />
      <Route exact path='/Student Services' component={StudentService} />
      <Route exact path='/Student Testimonials' component={StudentTestimonials} />
      <Route exact path='/Blog' component={Blog} />
      <Route exact path='/Events' component={Events} />
      <Route exact path='/Webinar' component={Webinar} />
      <Route exact path='/BusinessAnalytics' component={BusinessAnalytics} />
      <Route exact path='/Business Studies' component={BusinessStudies} />
      <Route exact path='/Architecture & Building' component={ArchitectureAndBuilding} />
      <Route exact path='/Creative Arts, Design & Communication' component={ArtDesign} />
      <Route exact path='/Education' component={Education} />
      <Route exact path='/Engineering' component={Engineering} />
      <Route exact path='/Food & Hospitality' component={FandHospitality} />
      <Route exact path='/Humanities & Social Sciences' component={HandSScience} />
      <Route exact path='/Health & Allied Health' component={HandAHealth} />
      <Route exact path='/Information Technology' component={InformationTechnology} />
      <Route exact path='/Law' component={Law} />
      <Route exact path='/Sciences' component={Science} />
      <Route exact path='/Nursing' component={Nursing} />
      </Switch> 
      </BrowserRouter>
    </div>
    
      
  );
}

export default App;
