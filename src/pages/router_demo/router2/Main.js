import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
      return (
          <div>
              this is Main page
              <Link to='/main/a'>嵌套路由</Link>
              {this.props.children}
          </div>
      )
    }
}  