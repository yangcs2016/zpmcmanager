import React, { Component } from 'react'
import {Card,Carousel} from 'antd'
import './ui.less'

export default class Carousels extends Component {
  render() {
    return (
      <div>
        <Card title='文字背景轮播' className='card-wrap'>
            <Carousel autoplay effect='scrollx'>
                <div><h3>ZPMC Steel Structure 1</h3></div>
                <div><h3>ZPMC Steel Structure 2</h3></div>
                <div><h3>ZPMC Steel Structure 3</h3></div>
                <div><h3>ZPMC Steel Structure 4</h3></div>
            </Carousel>
        </Card>
        <Card title='图片轮播' className='slider-wrap'>
            <Carousel autoplay effect='scrollx'>
                <div><img src="/assets/carousel-img/carousel-1.jpg" alt="1" /></div>
                <div><img src='/assets/carousel-img/carousel-2.jpg' alt='2' /></div>
                <div><img src='/assets/carousel-img/carousel-3.jpg' alt='3' /></div>
            </Carousel>
        </Card>
      </div>
    )
  }
}
