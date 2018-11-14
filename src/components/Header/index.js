import React,{Component} from 'react';
import {Row,Col} from 'antd';
import './index.less'
import Util from './../../utils/utils';
import axios from './../../axios';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:'',
            sysTime:''
        }
    }    
    componentWillMount(){
        this.setState({
            userName:'大力神'
        })
        setInterval(()=>{
            let sysTime=Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        //this.getWeatherAPIDate();
    }
    getWeatherAPIDate(){
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=Nml1Etez6r17wskonYZQw3Z9Nzmaqfa2'
        }).then((res)=>{
            if(res.status=='success'){
                let data=res.results[0].weather_data[0];
                this.setState({
                    dayPicUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    render(){
        return(
            <div className='header'>
                <Row className='header-top'>
                    <Col span='24'>
                        <span>欢迎, {this.state.userName}</span>
                        <a href='#'>退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'> 
                    <Col span='4' className='breadcrumb-title'>
                        首页
                    </Col>
                    <Col span='20' className='weather'>
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather-detail'>
                        <img src={this.state.dayPicUrl} alt='' />
                        {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}