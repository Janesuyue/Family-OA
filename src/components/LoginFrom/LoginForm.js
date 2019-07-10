import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import Store from '../../store/Store';
import Action from '../../store/Action';
import './LoginForm.scss';

class NormalLoginForm extends Component {
  constructor(props){
    super(props)
    this.changeItem = this.changeItem.bind(this)
    this.toHome = this.toHome.bind(this)
    this.toHomeItem = this.toHomeItem.bind(this)
  }

  state={
    LoginObj:Store.getState().login,
    toDoHome:false,
    isToHome:Store.getState().ToDoHome
  }

  
  changeItem(){
    this.setState({
      LoginObj:Store.getState().login
    })
  }

  componentDidMount(){
      Store.subscribe(this.changeItem)
      Store.subscribe(this.toHomeItem)
  }

  toHome(bool){
    if(this.state.toDoHome === bool){
      this.props.history.push('/home')
    }
  }

  toHomeItem(){
    this.setState({
      isToHome:Store.getState().ToDoHome
    })
  }


  handleSubmit = e => {
    e.preventDefault();

    let that = this.state.toDoHome
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios({
          method:'post',
          url:'http://api.cat-shop.penkuoer.com/api/v1/auth/manager_login',
          data:{
            userName:values.username,
            password:values.password
          }
        }).then(function(response){
          console.log(response)

          // _this.setState({
          //     tokem: response.data.token,
          //     username: values.username
          // })

          if(response.data.code === 'success'){
            Store.dispatch(Action.LoginItem({
              tokem: response.data.token,
              username: values.username
            }));
            Store.dispatch(Action.toHomeItem(that))

          }
        })
      }
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="username"
              placeholder="Username"
            />,
          )}
        </Form.Item>
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
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
          Forgot password
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
            {/* <a href="">register now!</a> */}
            register now!
        </Form.Item>
      </Form>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginForm