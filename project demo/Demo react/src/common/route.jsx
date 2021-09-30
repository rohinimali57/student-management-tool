import React from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Student from '../Master/student'

const Routes = () => (
    <Router>
      <div>
      <Route exact path="/"  component={Student}/>
     
      <Route exact path="/Student"  component={Student}/>
      


      </div>
      </Router>
);
export default Routes