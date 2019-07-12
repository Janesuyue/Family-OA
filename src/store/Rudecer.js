import {combineReducers} from 'redux';
import ToLogin from './toLogin/toLogin';
import ManagerInfo from './Manager/Manager_info';
import UsersList from './UserList/UsersList';


var Reducer = combineReducers({
    login:ToLogin,
    Manager:ManagerInfo,
    UsersList:UsersList
})

export default Reducer