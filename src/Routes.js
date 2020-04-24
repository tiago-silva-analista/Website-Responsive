import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Releases from './container/Releases';
import Backlog from './container/Backlog';
import Sprints from './container/Sprints';
import Home from './container/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <App>
                    <Route path="/" component={({ match }) =>
                        <div>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/Releases" component={Releases}></Route>
                            <Route path="/Backlog" component={Backlog}></Route>
                            <Route path="/Sprints" component={Sprints}></Route>
                        </div>} />
                </App>
            </Switch>
        </BrowserRouter>
    );
}