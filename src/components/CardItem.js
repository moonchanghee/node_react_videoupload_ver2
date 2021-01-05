import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Card, Avatar, Col, Typography, Row } from 'antd';
const { Meta } = Card;

const CardItem = (data) =>{
  
const renderCards = data.data.map((video, index) => {

  return (
<>
<Col lg={6} md={8} xs={24}>
  <div style = {{marginTop : "30%"}}>
  <a href={`/video/${video._id}`} >
  <Card
  hoverable
  style={{width : "80%" , height: "100%"}}
  // cover = {<img style={{ width: '100%' , height: "200%" }} alt="thumbnail" src="../thumbnails/aaa.png"/>}
  cover = {<img style={{ width: '100%' , height: "200%" }} alt="thumbnail" src={`../thumbnails/${video.thumbName}` }/>}
  >    
    <Meta style = {{marginTop : "20%"}}
    title = {video.title}
    />
  </Card>
  </a>  
  </div>
  </Col>
  </>
  )
})

return(
  <>
    {renderCards}
  </>
 
)};

export default CardItem