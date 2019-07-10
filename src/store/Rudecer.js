import {combineReducers} from 'redux';
import ToLogin from './Login/Login';
import ToDoHome from './Login/toHome';

var Reducer = combineReducers({
    login:ToLogin,
    toHome:ToDoHome
})

export default Reducer