import React,{Component} from 'react'
import {Card,Button,Radio} from 'antd'
import './ui.less'

export default class Buttons extends Component {
    state={
        loading:true,
        size:'default'
    }
    handleClosLoading=()=>{
        console.log(this.state.loading)
        this.setState({
            loading:false
        })
    }
    handleChange=(e)=>{
        this.setState({
            size:e.target.value
        })
    }
    render() {
      return (
          <div>
                <Card title='基础按钮' className='card-wrap'>
                    <Button type='primary'>ZPMC</Button>
                    <Button >ZPMC</Button>
                    <Button type='dashed'>ZPMC</Button>
                    <Button type='danger'>ZPMC</Button>
                    <Button disabled>ZPMC</Button>
                </Card>
                <Card title='图形按钮' className='card-wrap'>
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='primary' icon='search'>搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                </Card>
                <Card title='loading按钮' className='card-wrap'>
                    <Button type='primary' loading={this.state.loading}>确定</Button>
                    <Button shape='circle' type='primary' loading={this.state.loading}></Button>
                    <Button type='primary' loading={this.state.loading}>点击加载</Button>
                    <Button shape='circle' loading={this.state.loading}></Button>
                    <Button type='primary' onClick={this.handleClosLoading}>关闭</Button>
                </Card>
                 <Card title='按钮组' style={{marginBottom:10}}>
                    <Button.Group>
                         <Button type='primary' icon='left'>返回</Button>
                         <Button type='primary' icon='right'>前进</Button>
                    </Button.Group>
                 </Card>
                <Card title='按钮尺寸' className='card-wrap'>
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value='large'>大</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='small'>小</Radio>
                    </Radio.Group>
                  <Button type='primary' size={this.state.size}>ZPMC</Button>
                  <Button type='dashed' size={this.state.size}>ZPMC</Button>
                  <Button type='danger' size={this.state.size}>ZPMC</Button>
                  <Button disabled type='primary' size={this.state.size}>ZPMC</Button>
                </Card>
          </div>
      )
    }
}  