import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SingleChirp from './SingleChirp';
import AddChirp from './AddChirp';
import ChirpTimeline from './ChirpTimeline';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="container-fluid">
                        <AddChirp />
                        <Switch>
                            <Route exact path="/" component={ChirpTimeline} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;