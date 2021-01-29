import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "../header";

function router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'></Route>
                <Route path='/home'><Header /></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default router;