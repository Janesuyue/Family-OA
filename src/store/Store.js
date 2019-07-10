
import {createStore,applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import Reducer from './Rudecer';

var Store=createStore(Reducer,applyMiddleware(Thunk))

export default Store