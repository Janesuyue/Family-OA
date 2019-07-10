import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect} from 'react-router-dom';

// let user = JSON.parse(localStorage.getItem('spaLogin')).username;
// console.log(JSON.parse(localStorage.getItem('spaLogin')))

class App extends Component {
  // constructor(){
  //   // this.state={
  //   //   user:localStorage.getItem('spaLogin')
  //   // }
  // }
  render() {
    return (
      <Router>
        <div>
          {/* 利用三目运算符，判断localStorage中是否有spaLogin的值,如果为空则跳转到登录页，不为空跳转到首页 */}
          {localStorage.getItem('spaLogin') === null ? <Redirect to="/login"/> : <Redirect to="/home" />}
        </div>
      </Router>
    )
  }
}

export default App;
