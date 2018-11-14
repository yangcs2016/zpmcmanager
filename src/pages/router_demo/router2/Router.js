import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Main from './Main'
import About from './../router1/About'
import Topic from './../router1/Topic'
import Home from './../router2/Home'

export default class IRouter extends Component {
  render() {
    return (
        <Router>
            <Home>
                {/* <Route exact={true} path='/' component={Main} /> */}
                <Switch>
                    <Route path='/main' render={()=>
                        <Main>
                            <Route path='/main/a' component={About} />
                        </Main>
                    } />
                    <Route path='/about' component={About} />
                    <Route path='/topic' component={Topic} />
                </Switch>
               <h1>hello</h1>
            </Home>
        </Router>
    )
  }
}
