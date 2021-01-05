import React , {useState}from 'react';
import {Menu } from 'antd';
import 'antd/dist/antd.css';




const headerFrom = () => {

return(
<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
        {/* <Menu.Item key="1" style={{marginLeft: "25%"}}><InputBox/></Menu.Item> */}
        <Menu.Item key="2"><a href="/uploadpage">업로드</a></Menu.Item>
        <Menu.Item key="3" style ={{marginLeft : "80%"}}><a href="/login">로그인</a></Menu.Item>
        
      </Menu>
)
}
export default headerFrom

