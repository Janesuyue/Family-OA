import React,{Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from '../App';
import Home from '../views/Home';
import Login from '../views/Login';


class MRouter extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        )
    }
}

export default MRouter