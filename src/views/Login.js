import React,{Component} from 'react';
import {Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import Store from '../store/Store';
import Action from '../store/Action';
import '../sass/Login.scss';

class NormalLoginForm extends Component{
    constructor(props){
        super(props)
        this.changeItem = this.changeItem.bind(this)
    }

    state={
        LoginObj:Store.getState().login,
    }

    changeItem(){
        this.setState({
            LoginObj:Store.getState().login
        })
    }

    componentDidMount(){
        Store.subscribe(this.changeItem)
    }

    handleSubmit = e => {
        e.preventDefault();
        let that = this
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
                    // 判断是否成功登录，成功时将token值存入state中和localStorage
                    if(response.data.code === 'success'){
                        Store.dispatch(Action.LoginItem({
                            tokem: response.data.token,
                            username: values.username
                        }));
                        that.props.history.push('/home')
                    }
                })
            }
        })
    };
    
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="LoginBox">
                <Row type="flex" align="middle" justify="end">
                    <Col span={8} pull={2} className="LoginForm">
                        {/* 标题 */}
                        <Col span={24}>
                            <h2>Login</h2>
                        </Col>
                        {/* 输入框 */}
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
                    </Col>
                </Row>
            </div>
        )
    }
}
const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginForm