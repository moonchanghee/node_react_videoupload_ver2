import React , {useState}from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';



const InputBox = () => {
  const [info , setinfo] = useState("")


  const onChange = e => {
    setinfo(e.currentTarget.value)
  };

  const submit = e => {
    console.log(info)
  };


 return(
  <>
  <Input.Group style ={{width : "200%"}}>
    <Input.Search enterButton style={{verticalAlign:'middle'}} 
     placeholder="name" allowClear onChange={onChange} onSearch = {submit}
     size = "large" width = "50%" 
     value = {info}/>
    </Input.Group>
      </>
      
)}

export default InputBox