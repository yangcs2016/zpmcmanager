import React, { Component } from 'react'
import {Card,Spin,Icon,Alert} from 'antd'
import './ui.less'

export default class loadings extends Component {
  render() {
    const icon=<Icon type='loading' />
    return (       
      <div>          
        <Card title='Spin用法' className='card-wrap'>
            <Spin size='small' style={{marginLeft:10}}/>
            <Spin style={{marginLeft:10}} />
            <Spin size='large' style={{marginLeft:10}}/>
            <Spin size='large'
            indicator={icon}
            style={{marginLeft:10}}
            />
        </Card>
        <Card title='内容遮罩' className='card-wrap'>
            <Alert
            message='Info'
            description='你学会React了吗？我们就要关闭课程了'
            type='info'
            />
            <Alert
            message='Info'
            description='你学会React了吗？我们就要关闭课程了'
            type='warning'
            />
            <Spin>
                <Alert
                message='Info'
                description='你学会React了吗？我们就要关闭课程了'
                type='warning'
                />
            </Spin>
            <Spin tip='加载中...'>
                <Alert
                message='Info'
                description='你学会React了吗？我们就要关闭课程了'
                type='warning'
                />
            </Spin>
            <Spin indicator={icon}>
                <Alert
                message='Info'
                description='你学会React了吗？我们就要关闭课程了'
                type='warning'
                />
            </Spin>
        </Card>
      </div>
    )
  }
}
