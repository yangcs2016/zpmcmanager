import React, { Component } from 'react'
import { Button,Card,Modal} from 'antd';

export default class Modals extends Component {
    state={
        modal1:false,
        modal2:false,
        modal3:false,
        modal4:false
    }
    handleOpenModal=(type)=>{
        console.log(type)
        this.setState({
            [type]:true
        })
    }
    handleMessage=(method)=>{
        Modal[method]({
            title:'确定？',
            content:'你真的学会react弹窗了吗？',
            onOk(){
                console.log('Ok')
            },
            onCancel(){
                console.log('Cancel')
            }
        })
    }
  render() {
    return (
      <div>
        <Card title='基础弹窗' className='card-wrap'>
            <Button type='primary' onClick={()=>this.handleOpenModal('modal1')}>打开</Button>
            <Button type='primary' onClick={()=>this.handleOpenModal('modal2')}>自定义页脚</Button>
            <Button type='primary' onClick={()=>this.handleOpenModal('modal3')}>顶部20px弹窗</Button>
            <Button type='primary' onClick={()=>this.handleOpenModal('modal4')}>水平垂直居中</Button>
        </Card>
        <Card title='信息确认框' className='card-wrap'>
            <Button type='primary' onClick={()=>this.handleMessage('confirm')}>Confirm</Button>
            <Button type='primary' onClick={()=>this.handleMessage('info')}>Info</Button>
            <Button type='primary' onClick={()=>this.handleMessage('success')}>Success</Button>
            <Button type='primary' onClick={()=>this.handleMessage('warning')}>Warning</Button>
        </Card>
        <Modal 
        title='ZPMC'
        visible={this.state.modal1}
        onCancel={()=>{
            this.setState({
                modal1:false
            })
        }}
        onOk={()=>{
            this.setState({
                modal1:false
            })
        }}
        >
        <p>学习React ANTD 组件-弹窗</p>
        </Modal>
        <Modal 
        title='ZPMC'
        visible={this.state.modal2}
        okText='好的'
        cancelText='算了'
        onCancel={()=>{
            this.setState({
                modal2:false
            })
        }}
        onOk={()=>{
            this.setState({
                modal2:false
            })
        }}
        >
        <p>学习React ANTD 组件-弹窗</p>
        </Modal>
        <Modal 
        title='ZPMC'
        visible={this.state.modal3}
        style={{top:20}}
        onCancel={()=>{
            this.setState({
                modal3:false
            })
        }}
        onOk={()=>{
            this.setState({
                modal3:false
            })
        }}
        >
        <p>学习React ANTD 组件-弹窗</p>
        </Modal>
        <Modal 
        title='ZPMC'
        visible={this.state.modal4}
        wrapClassName='vertical-center-modal'
        onCancel={()=>{
            this.setState({
                modal4:false
            })
        }}
        onOk={()=>{
            this.setState({
                modal4:false
            })
        }}
        >
        <p>学习React ANTD 组件-弹窗</p>
        </Modal>
      </div>
    )
  }
}
