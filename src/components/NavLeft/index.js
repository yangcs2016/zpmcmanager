import React,{Component} from 'react';
import {Menu} from 'antd';
import {NavLink} from 'react-router-dom'
import MenuConfig from '../../resource/menuConfig';
import './index.less';
const SubMenu=Menu.SubMenu;

export default class NavLeft extends Component{
    componentWillMount(){
        const menuTreeNode=this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                       {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>
            <NavLink to={item.key}>{item.title}</NavLink>            
            </ Menu.Item>
        });
    }
    render(){
        return(
            <div> 
                <div className='logo'>
                    <img src='/assets/logo-ant.svg' alt=''></img>
                    <h1>ZPMC MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}