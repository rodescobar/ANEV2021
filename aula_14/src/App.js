import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Administrativa from './admin/Administrativa'
import Site from './site/Site'
import Login from './login/login'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Site />
                </Route>
                <Route path="/admin">
                    <Administrativa />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default App