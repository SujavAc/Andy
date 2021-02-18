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
      </Switch> 
      </BrowserRouter>
    </div>
    
      
  );
}

export default App;
