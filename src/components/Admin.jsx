import React, { Component } from "react";
import { Descriptions } from "antd";
import axios from 'axios';
import Store from '../store/Store';
import Action from '../store/Action';

const token = JSON.parse(localStorage.getItem('spaLogin')).tokem;

export default class Admin extends Component {
  // constructor(props) {
  //   super(props)
  // }

  state = {
    userData:'',
    token:token
  }

  componentDidMount() {
    
    let _this = this
    axios({
      method: 'get',
      url: 'http://api.cat-shop.penkuoer.com/api/v1/users/manager_info',
      data: {

      },
      headers: { 'Accept': 'application/json', 'Authorization': 'Bearer ' + this.state.token }
    }).then((res) => {
      Store.dispatch(Action.Manager_info({
        userName: res.data.userName,
        nickName: res.data.nickName,
        id: res.data._id,
        time: res.data.updatedAt,
        password: res.data.password
      })); 
      let Manager = JSON.parse(localStorage.getItem('Manager'))
      // console.log(Manager)
      _this.setState({userData:Manager})
    })
  }

  render() {
    return (
      <div>
        <Descriptions title="管理员信息">
          <Descriptions.Item label="userName">{this.state.userData.userName}</Descriptions.Item>
          <Descriptions.Item label="nickName">{this.state.userData.nickName}</Descriptions.Item>
          <Descriptions.Item label="ID">{this.state.userData.id}</Descriptions.Item>
          <Descriptions.Item label="Time">{this.state.userData.time}</Descriptions.Item>
          <Descriptions.Item label="PassWord">
            {this.state.userData.password}
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}
