import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrfanatoMaps from './pages/OrfanatoMaps';

function Routes(){
    return(
        <BrowserRouter>
           <Route path="/" exact component={Landing}/> 
           <Route path="/app" component={OrfanatoMaps}/>
        </BrowserRouter>
    );
}

export default Routes;