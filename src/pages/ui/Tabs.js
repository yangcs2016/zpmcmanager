import React, { Component } from 'react'
import {Card,message,Tabs,Icon} from 'antd'
import './ui.less'
const TabPane=Tabs.TabPane

export default class MyTabs extends Component {
    constructor(props){
        super(props);
        const panes=[
            {
                tab:'tab 1',
                key:'1',
                content:'tab 1'
            },{
                tab:'tab 2',
                key:'2',
                content:'tab 2'
            },{
                tab:'tab 3',
                key:'3',
                content:'tab 3'
            }
        ];
       this.state={
          activeKey: panes[0].key,
          panes,
        }

    }
    
    handleChange=(key)=>{
        message.info('您选择了Tab标签： '+key)
    }
    add = () => {
        const panes = this.state.panes;
        let index=this.state.panes.length+1;
        console.log(index)
        const activeKey = `${index}`;
        panes.push({ tab: `Tab${index++}`, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      }
      onChange = (activeKey) => {
        message.info('您选择了Tab标签： '+activeKey)
        this.setState({ activeKey });
      }
      onEdit = (targetKey, action) => {
        this[action](targetKey);
      }
      remove = (targetKey) => {
          console.log(targetKey)
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
      }
  render() {
    return (
      <div>
        <Card title='Tab页签' className='card-wrap'>
            <Tabs defaultActiveKey='1' onChange={this.handleChange}>
                <TabPane tab='Tab 1' key='1'>欢迎学习React课程</TabPane>
                <TabPane tab='Tab 2' key='2' disabled>React是一个受欢迎的MV*框架</TabPane>
                <TabPane tab='Tab 3' key='3'>欢迎学习React-Redux框架</TabPane>
            </Tabs>
        </Card>
        <Card title='Tab带图页签' className='card-wrap'>
            <Tabs defaultActiveKey='1' onChange={this.handleChange}>
                <TabPane tab={<span><Icon type='plus'/>添加</span>} key='1'>欢迎学习React课程</TabPane>
                <TabPane tab={<span><Icon type='edit'/>编辑</span>} key='2'>React是一个受欢迎的MV*框架</TabPane>
                <TabPane tab={<span><Icon type='delete'/>删除</span>} key='3'>欢迎学习React-Redux框架</TabPane>
            </Tabs>
        </Card>
        <Card title='Tab动态页签' className='card-wrap'>
            <Tabs 
            activeKey={this.state.activeKey}
            onChange={this.onChange}
            type="editable-card"
            onEdit={this.onEdit}
            >
               {
                   this.state.panes.map((pane)=>
                       <TabPane 
                       tab={pane.tab}
                       key={pane.key}                       
                       >{pane.content}</TabPane>
                   )
               }
            </Tabs>
        </Card>
      </div>
    )
  }
}
