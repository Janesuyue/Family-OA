import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import axios from 'axios';
// import Store from '../store/Store';
// import Action from '../store/Action';

const fakeDataUrl = 'http://api.cat-shop.penkuoer.com/api/v1/admin/users'
const token = JSON.parse(localStorage.getItem('spaLogin')).tokem;

class NormalLoginForm extends Component {
  // constructor(){
  //   super()
  //   // this.changeItem = this.changeItem.bind(this)
  // }

  state = {
  };

  changeItem(){
    // this.setState({list:Store.getState().UsersList})
  }


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios({
          url: fakeDataUrl,
          data:{
            userName: values.username,
            password: values.password,
            nickName:values.nickname,
            avatar:values.avatar
          },
          method: 'post',
          headers: { 'Accept': 'application/json', 'Authorization': 'Bearer ' + token },
        }).then(res => {
          console.log(res)
          // Store.dispatch(Action.UsersList(res.data.users))
        })
      }
     
    })
  }


  componentDidMount() {
    // Store.subscribe(this.changeItem)
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex">
        <Col span={24} style={{lineHeight: '100px'}}>
          添加用户
        </Col>
        <Col span={6}>
        <Form onSubmit={this.handleSubmit} className="login-form addUser">
          用户名
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          密码
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          昵称
          <Form.Item>
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your Nickname!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Nickname"
              />,
            )}
          </Form.Item>
          头像
          <Form.Item>
            {getFieldDecorator('avatar', {
              rules: [{ required: true, message: 'Please input your avatar!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Avatar"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              添加用户
            </Button>
          </Form.Item>
        </Form>
        </Col>
      </Row>
    );
  }
}
const AddUser = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default AddUser