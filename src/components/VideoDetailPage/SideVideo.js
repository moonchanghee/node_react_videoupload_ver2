import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import { Menu , Layout} from 'antd';

const SideVideo = () =>{

    const [SideVideos, setSideVideos] = useState([])

    useEffect(() => {
        Axios.get('/uploadpage/getVideos')
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.video)
                    setSideVideos(res.data.video)
                } else {
                    alert('Failed to get Videos')
                }
            })
    }, [])




    const sideVideoItem = SideVideos.map(( video, index) => {


       return( 
        <>
        <Layout >  
        {/* <Menu theme = "light"  mode="inline" style ={{marginTop:"10%"}}> */}
       <div style={{ display: 'flex', padding: '0 2rem' }}>
        <div style={{ width:'100%', marginRight:'1rem' }}>
            <a href={`/video/${video._id}`}  style={{ color:'gray' }}>
                <img style={{ width: '100%' }} src= {`../thumbnails/${video.thumbName}`} alt="thumbnail" />
            </a>
        </div>

        <div style={{ width:'50%' }}>
            <a href={`/video/${video._id}`} style={{ color:'gray' }}>
                <span style={{ fontSize: '1rem', color: 'black' }}>{video.title}</span><br />
            </a>
        </div>
    </div>
    {/* <br/><br/> */}
    {/* </Menu> */}
    </Layout>
    <br/>
    </>
    )})



return(
    <React.Fragment>
    {/* <div style={{ marginTop:'3rem' }}> */}
    {sideVideoItem}
    {/* </div> */}

    {/* {sideVideoItem} */}


</React.Fragment>


)}

export default SideVideo