import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
      return (
          <div>
              this is Main page
              <br />
              <Link to='/main/param1'>嵌套路由1</Link>
              <br />
              <Link to='/main/param2'>嵌套路由2</Link>              
              {this.props.children}
          </div>
      )
    }
}  