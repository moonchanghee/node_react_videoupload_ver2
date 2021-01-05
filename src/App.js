import React from 'react';
import {useState, useEffect} from 'react'
// import {useEffect, useState} from 'react';
import { Route, BrowserRouter, Switch} from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import VideoDetailPage from './components/VideoDetailPage/VideoDetailPage'
import MainPage from './components/MainPage'
import VideoUploadPage from './components/VideoUploadPage/VideoUploadPage'
import './App.css';

const App = () => {

  // const [users,setUsers] = useState([]);
  // const sibal = "sekki"
  // useEffect(() => {
  //   fetch('/users')
  //   .then((res) => res.json())
  //   .then((user) => {
  //     setUsers(user)
  //   })
  // },[])

return (
  <>
<BrowserRouter>
<Switch>
  <Route exact path ="/login" component ={Login} />
  <Route exact path ="/" component ={MainPage} />
  <Route exact path ="/register" component ={Register} />
  <Route exact path ="/uploadpage" component ={VideoUploadPage} />
  <Route exact path ="/video/:videoId" component ={VideoDetailPage} />
  {/* <Route exact path ="/video" component ={VideoDetailPage} /> */}
</Switch>
</BrowserRouter>

  </>
  )
}

export default App;