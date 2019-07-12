import React, { Component } from 'react'
import { List, Avatar, Button, Row, Col } from 'antd';
import { NavLink, Router } from 'react-router-dom';
import axios from 'axios';
import Store from '../store/Store';
import Action from '../store/Action';
import '../sass/User.scss'

const fakeDataUrl = 'http://api.cat-shop.penkuoer.com/api/v1/admin/users'
const token = JSON.parse(localStorage.getItem('spaLogin')).tokem;

class User extends Component {
  constructor(props){
    super(props)
    this.changeItem = this.changeItem.bind(this)
  }

  state = {
    // list:[],
    list: Store.getState().UsersList,
    visible: false,
  };

  changeItem(){
    this.setState({list:Store.getState().UsersList})
  }

  componentDidMount() {
    Store.subscribe(this.changeItem)

    let Manager = JSON.parse(localStorage.getItem('Manager'))
    axios({
      url: fakeDataUrl,
      data:{
        per:10,
        page: 1,
        userName: Manager.userName, 
        nickName:Manager.nickName
      },
      method: 'get',
      headers: { 'Accept': 'application/json', 'Authorization': 'Bearer ' + token },
    }).then(res => {
      // this.setState({list:res.data.users})
      Store.dispatch(Action.UsersList(res.data.users))
    })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });

  };
  
  handleCancel = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <Router>
        <Row>
          <Col span={24} className="userTit">用户管理中心</Col>
        </Row>
        <List
          className="demo-loadmore-list"
          dataSource={list}
          renderItem={(item,i) => (
            <List.Item actions={[
              <Button type="danger" onClick={this.delBtn.bind(this,item._id,i)}>删除</Button>
            ]}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<NavLink to={{pathname:"/home/user/userdetail",query:{id:item._id}}}>{item.userName}</NavLink>}
                description={item.nickName}
              />
              <div>{item.updatedAt}</div>
            </List.Item>
          )}
        />
        </Router>
      </div>
    );
  }

  delBtn(id,i){
    axios({
      url: fakeDataUrl+"/"+id,
      method: 'delete',
      headers: { 'Accept': 'application/json', 'Authorization': 'Bearer ' + token },
    }).then(res => {
      if(res.status === 200){
        Store.dispatch(Action.UsersListDel(i))
      }
    })
  }
}
export default User