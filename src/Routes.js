import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { persistStore } from 'redux-persist';
// Layout container
import LayoutContainer from './common/Layout/LayoutContainer';
import Layout1 from './containers/layout';
import Layout2 from './common/Layout/Layout2';

import Login from './containers/auth'
import Page from './containers/page'
import Profile from './containers/profile'

// import configureStore from './redux/store/configure-store'
// const store = configureStore()

class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }
    privateRoutes = () => {
        // persistStore(store, {}, () => {
        //     let { user } = store.getState().auth
        //     if (!user) {
        //         browserHistory.replace('/');
        //     } 
        // })
    }
    requireLogin = () => {
        // persistStore(store, {}, () => {
        //     let { user } = store.getState().auth
        //     if (user) {
        //         browserHistory.replace('/pokedex');
        //     } 
        // })
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={LayoutContainer}>
                    <Route component={Layout1} onEnter={this.privateRoutes}>
                    <Route path='/pokedex' component={Page} />
                    <Route path='/profile' component={Profile} />

                    </Route>
                    <Route component={Layout2} onEnter={this.requireLogin}>
                        <IndexRoute component={Login} />
                        <Route component={Login} />
                    </Route>
                    {/* <Route path="/" component={App}  onEnter={this.privateRoutes}>
              <IndexRoute component={Login}/>
              <Route path="pokedex" component={Page} onEnter={this.privateRoutes}/>
              <Route path="profile" component={Profile} onEnter={this.privateRoutes}/>
            </Route> */}
                </Route>
            </Router>
        )
    }
}

export default Routes