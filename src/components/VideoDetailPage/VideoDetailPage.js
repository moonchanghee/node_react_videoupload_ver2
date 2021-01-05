import React,{useEffect , useState} from 'react'
import {Row , Col, List, Avator} from 'antd'
import SideVideo from './SideVideo'
import Axios from 'axios';
import Header from '../headerFrom/headerFrom'


const VideoDetailPage = (props) => {

    const videoId = props.match.params.videoId  
    const variable = {videoId: videoId}
    const [CommentLists, setCommentLists] = useState([])
    const [Video, setVideo] = useState([])
    

useEffect(() => {
    Axios.post('/uploadpage/getVideoDetail' , variable)
    .then(res => {
        if(res.data.success){
            console.log("비디오 가져오기 성공")
            console.log(res.data.video)
            setVideo(res.data.video)
            
        }else{
            console.log("비디오 가져오기 실패")
        }
    })
}, [])


return(
<>
{console.log(Video)}

<Header/>
<Row gutter={[16,16]}>
<Col lg ={18} xs={24}>
{/* <div style={{width : '50%' , padding: '10%'}}>     */}
<video src={`../${Video.fileName}`} style={{width : '90%' , height:'70%' ,marginTop:"5%" , marginLeft:"5%"}}controls></video>  
<List.Item
actions>
<List.Item.Meta
avatar
title =  {"title :" + Video.title}
description = {"description : " + Video.description}/>
</List.Item>
{/* </div> */}
</Col>

<Col lg ={6} xs={24}>
<SideVideo/>
</Col>
</Row>
</>

)}

export default VideoDetailPage