import React , {useState} from 'react';
import {useDispatch ,connect } from 'react-redux';
import {registerUsers} from '../actions/User_actions'


const Register = () => {

const dispatch = useDispatch();    
const [Id , setId] = useState("")
const [Pwd , setPwd] = useState("")
const [Email , setEmail] = useState("");

const onIdChange = (e) => {
    setId(e.currentTarget.value)
} 
const onPwdChange = (e) => {
    setPwd(e.currentTarget.value)
} 
const onEmailChange = (e) => {
    setEmail(e.currentTarget.value)
} 


const onSubmitHandler = (e) => {
    e.preventDefault(); //페이지 refresh를 막아준다
    console.log("id :"  + Id)
    console.log("Password : " + Pwd)
    console.log("email : " + Email)
    
    let body = {
        id: Id,
        pwd : Pwd,
        email : Email
    }

    dispatch(registerUsers(body))
    // .then(res => {
    //     if(res.payload.success){
    //         console.log("가입성공")
    //     }
    //     else{
    //         alert("실패")
    //     }
    // })

}



return(
<div style = {{display:'flex' , justifyContent:'center' , alignItems : 'center' , 
width:'100%' , height :'100vh'}}>
<form style = {{display: 'flex' , flexDirection : 'column' }} onSubmit = {onSubmitHandler} >
<input type = "text" placeholder = "id" value ={Id} onChange = {onIdChange}/>
<input type = "text" placeholder = "pw" value ={Pwd}  onChange = {onPwdChange}/>
<input type = "email" placeholder = "email" value ={Email}  onChange = {onEmailChange}/>
<button onSubmit = {onSubmitHandler} >회원가입</button>
</form>
</div>





)}
export default Register