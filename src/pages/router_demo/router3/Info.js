import React,{Component} from 'react'

export default class Info extends Component {
    state={
        data:'hello world'
    }
    componentDidMount(){
       setTimeout(() => {
        this.setState({data:this.props.match.params.id}) 
       }, 2000); 
    }
    render() {
      return (
          <div>
              this is Info page
              <br />
              <hr />
              {this.state.data}
          </div>
      )
    }
}  