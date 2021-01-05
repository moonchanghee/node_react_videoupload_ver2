import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Switch ,BrowserRouter , Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import reducer from './reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import MainPage from './components/MainPage'
import Login from './components/Login'
import Register from './components/Register'
import VideoDetailPage from './components/VideoDetailPage/VideoDetailPage'
import VideoUploadPage from './components/VideoUploadPage/VideoUploadPage'



const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = {store}>
 <BrowserRouter>
            <App />
        </BrowserRouter>,
</Provider>,
document.getElementById('root')
);

serviceWorker.unregister();