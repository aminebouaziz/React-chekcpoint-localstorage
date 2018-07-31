import React from 'react'
import {BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from './Home'
import Details from './Details'
export default () =>(
<BrowserRouter>
  <Switch>  
    <Route path="/home"  component={Home}/>
    <Route path="/details"  component={Details}/>
   </Switch>
</BrowserRouter>
);