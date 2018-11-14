import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Main from './Main'
import Info from './Info'
import About from './../router1/About'
import Topic from './../router1/Topic'
import Home from './Home'
import NoMatch from './NoMatch'

export default class IRouter extends Component {
  render() {
    return (
        <Router>
            <Home>
                {/* <Route exact={true} path='/' component={Main} /> */}
                <Switch>
                    <Route path='/main' render={()=>
                        <Main>
                            <Route path='/main/:id' component={Info} />
                        </Main>
                    } />
                    <Route path='/about' component={About} />
                    <Route path='/topic' component={Topic} />
                    <Route component={NoMatch} />
                </Switch>
            </Home>
        </Router>
    )
  }
}
