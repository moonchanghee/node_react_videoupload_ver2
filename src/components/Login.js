import React , {useState} from 'react';
import {Link} from 'react-router-dom'
// import Axios from 'axios';
import {loginUser} from '../actions/User_actions'
import {useDispatch ,connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { connect } from 'mongoose';

const Login = () => {

    const dispatch = useDispatch();

const [Id , setId] = useState("")
const [Password , setPassword] = useState("")

const onIdHandler = (e) => {
    setId(e.currentTarget.value)
}

const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value)
}

const onSubmitHandler = (e) => {
    e.preventDefault(); //페이지 refresh를 막아준다
    console.log("id :"  + Id)
    console.log("Password : " + Password)
    
    let body = {
        id: Id,
        password : Password
    }

    dispatch(loginUser(body))

}


    return(
    <div style = {{display:'flex' , justifyContent:'center' , alignItems : 'center' , 
                    width:'100%' , height :'100vh'}}>
        <form style = {{display: 'flex' , flexDirection : 'column'}} onSubmit = {onSubmitHandler}>
        <input type = "text" placeholder = "id" value={Id} onChange = {onIdHandler}/>
        <input type = "password" placeholder = "pw" value={Password} onChange = {onPasswordHandler}/>
        <button>로그인</button>
        <Link to = "/register">회원가입</Link>
        </form>
    </div>

)}


export default Login