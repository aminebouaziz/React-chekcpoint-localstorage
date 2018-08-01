import React from 'react'
import {BrowserRouter,Route,Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Details from './Details'
import './style.css'

export default () =>(
  
<BrowserRouter>
  <Switch>  
    <Route path="/home"  component={Home}/>
    <Route path="/details"  component={Details}/>
    <Redirect from="/" to="home" />
   </Switch>
</BrowserRouter>
);