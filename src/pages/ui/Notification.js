import React, { Component } from 'react'
import {Card,Button,notification} from 'antd'
import './ui.less'

export default class Notification extends Component {
    showNotice=(type,direction)=>{
        if(direction){
            notification.config({
                placement:direction
            })
        }
        notification[type]({
            message:'发工资了',
            description:'高温补贴1000，年中奖20000，总共发30000，回家乐去吧！'
        })
    }
  render() {
    return (
      <div>
        <Card title='通知提醒框' className='card-wrap'>
            <Button type='primary' onClick={()=>this.showNotice('success')}>Success</Button>
            <Button type='primary' onClick={()=>this.showNotice('info')}>Info</Button>
            <Button type='primary' onClick={()=>this.showNotice('warning')}>Warning</Button>
            <Button type='primary' onClick={()=>this.showNotice('error')}>Error</Button>
        </Card>
        <Card title='通知提醒框' className='card-wrap'>
            <Button type='primary' onClick={()=>this.showNotice('success','topLeft')}>Success</Button>
            <Button type='primary' onClick={()=>this.showNotice('info','topRight')}>Info</Button>
            <Button type='primary' onClick={()=>this.showNotice('warning','bottomLeft')}>Warning</Button>
            <Button type='primary' onClick={()=>this.showNotice('error','bottomRight')}>Error</Button>
        </Card>
      </div>
    )
  }
}
