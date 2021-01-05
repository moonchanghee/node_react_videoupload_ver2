import React , {useState}from 'react'
import {Typography , Button, Form , message , Input } from 'antd'
import {PlusOutlined} from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import Dropzone from 'react-dropzone'
import Axios from 'axios';

const VideoUploadPage = (props) => {

const {Title} = Typography;
const [Titlecontent ,setTitlecontent] = useState("")
const [ Description , setDescription] = useState("")
const [FilePath, setFilePath] = useState('')
const[FileName , setFileName] = useState('')
const[thumbName , setthumbName] = useState('')

const Title_onChange = (e) => {
    setTitlecontent(e.currentTarget.value);
}


const Description_onChange = (e) => {
    setDescription(e.currentTarget.value);
}

const onDrop = (files) => { //올린 파일의 정보가 담겨져옴
let formData = new FormData();
const config = {
    header: {'content-type' : 'multipart/form-data'}
}
formData.append("file" , files[0])

console.log(files[0])

Axios.post('/uploadpage/videoupload' , formData , config )
.then(res => {
    if(res.data.success){
        console.log(res.data)
        console.log("비디오 업로드 성공")
        

        let variable = {
            url:res.data.url,
            fileName: res.data.fileName
        }
console.log(variable)
        setFilePath(res.data.url) //동영상주소
        setFileName(res.data.fileName)
        Axios.post('/uploadpage/thumbnail' , variable )
        .then(res => {
            if(res.data.success){
                console.log("썸네일 생성 성공")
                console.log(res.data.fileName)    
                setthumbName(res.data.fileName)
            }else{
                console.log("썸네일 생성 실패")     
            } 
        })

    }else
    alert('비디오 업로드 실패')
})

}





const onSubmit = (e) =>{
    e.preventDefault();

    
    const variables = {
        // writer: ,
        title:Titlecontent,
        description:Description ,
        filePath:FilePath,
        filename:FileName,
        thumbName : thumbName 
    }

    Axios.post('/uploadpage/uploadVideo',variables )
    .then(res => {
        if(res.data.success){
            console.log("성공")
            console.log(res.data)
            message.success("성공적으로 업로드를 했습니다")
            props.history.push('/')
        }else{
            console.log("실패")
        }
    })
}





return( 

<div style={{maxWidth: '50%' , margin:"2rem auto"}} >
<div style = {{textAlign : 'center' , marginBottom : '2rem'}}>
<Title level = {2}>Upload Video</Title>
</div>
<Form onSubmit= {onSubmit}>
<div style= {{display:'flex' , justifyContent:'space-between'}}>
<Dropzone
onDrop ={onDrop}
multiple = {false} //한번에 파일 몇개를 업로드할것인지
maxSize = {10000000}
>
{({getRootProps, getInputProps}) => (
        <section>
        <div style ={{width:'300px' , height: '240px' ,border :'1px solid lightgray',
        alignItems:'center' , justifyContent:'center'}} {...getRootProps()}>
            <input {...getInputProps()}/>
            <PlusOutlined style ={{fontSize:"50px" , marginTop: "30%" , marginLeft:"40%"} }/>
        </div>
        </section>
)
}
</Dropzone>
{/* <img src={`../thumbnails${thumbName}`}/>  */}
<div>
<img style={{ width: '80%' , height: "80%" , marginLeft : "10%"}} 
alt="thumbnail" src={`../thumbnails/${thumbName}` }/>
{/* `/video/${video._id}`}  */}
</div>
</div>


<label>Title</label>
<Input
onChange ={Title_onChange}
value ={Titlecontent}
/>
<br/>
<br/>
<label>Description</label>
<TextArea
onChange ={Description_onChange}
value ={Description}
/>
<br/>
<br/>
<Button type = "primary" onClick = {onSubmit}>
추가
</Button>
</Form>
</div> 
)}
export default VideoUploadPage;