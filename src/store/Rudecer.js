import {combineReducers} from 'redux';
import ToLogin from './toLogin/toLogin';

var Reducer = combineReducers({
    login:ToLogin,
})

export default Reducer