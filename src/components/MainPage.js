import React , {useEffect , useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Login from '../components/Login'
// import './index.css';
import InputBox from './InputBox'
import Axios from 'axios';
import CardItem from './CardItem'
import { Layout, Menu } from 'antd';
import Headers from '../components/headerFrom/headerFrom'
import { Card , Col , Row} from 'antd';
const { Meta } = Card;

const MainPage = () => {

  const [Videos, setVideos] = useState([])
  // const [thumbName, setthumbName] = useState([])
  const { Content, Footer, Sider } = Layout;

  useEffect(() => {
    console.log("안녕")
    Axios.get('/uploadpage/getVideos')
        .then(res => {
            if (res.data.success) {
                console.log(res.data)
                setVideos(res.data.video)
              } else {
                alert('Failed to get Videos')
            }
        })
}, [])


    return(
      <>
{console.log("dd" + Videos.filepath)}      
  {/* <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style ={{marginTop:"20%"}}>
        <Menu.Item key="1" >
          nav 1
        </Menu.Item>
        <Menu.Item key="2" >
          nav 2
        </Menu.Item>
        <Menu.Item key="3" >
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
    </Layout>   */}

    <Layout className="site-layout" >
    <Headers/>

       <Row gutter={16} style={{ marginLeft: 100 }}>
       <CardItem data = {Videos}/>
       </Row>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/> 
      <Footer style={{ textAlign: 'center' }}>..........video upload.......... </Footer>
    </Layout>
</>
  )
}

export default MainPage