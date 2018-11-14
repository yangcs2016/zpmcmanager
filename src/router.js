import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './Admin'
import Login from './pages/login'
import Buttons from './pages/ui/Buttons'
import Modals from './pages/ui/Modals'
import Loadings from './pages/ui/loadings'
import Notification from './pages/ui/Notification'
import Carousels from './pages/ui/Carousel'
import LoginForm from './pages/form/Login'
import Tabs from './pages/ui/Tabs'
import NoMatch from './pages/nomatch'

export default class Irouter extends Component {
  render() {
    return (
      <Router>
          <div>
              <App>
                  <Route exact={true} path="/" render={()=><div>hello</div>}></Route>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/admin' render={()=>
                      <Admin>
                          <Switch>
                            <Route path='/admin/ui/buttons' component={Buttons}></Route>
                            <Route path='/admin/ui/modals' component={Modals}></Route>
                            <Route path='/admin/ui/loading' component={Loadings}></Route>
                            <Route path='/admin/ui/notification' component={Notification}></Route>
                            <Route path='/admin/ui/tabs' component={Tabs}></Route>
                            <Route path='/admin/ui/carousel' component={Carousels}></Route>
                            <Route path='/admin/form/login' component={LoginForm}></Route>
                            <Route component={NoMatch}></Route>
                          </Switch>
                      </Admin>
                  }></Route>
              </App>
          </div>
      </Router>
    )
  }
}
