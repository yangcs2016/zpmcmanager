import React, { Component } from 'react';

export default class Child extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    componentWillMount(){
        console.log('will mount')
    }
    componentDidMount(){
        console.log('did mount')
    }
    componentWillReceiveProps(newProps){
        console.log('receive props',newProps.name)
    }
    shouldComponentUpdate(){
        console.log('should update')
        return true
    }
    componentWillUpdate(){
        console.log('wiil update')
    }
    componentDidUpdate(){
        console.log('did update')
    }
    render(){
        return <div>
            <p>{this.props.name}</p>
        </div>
    }
}