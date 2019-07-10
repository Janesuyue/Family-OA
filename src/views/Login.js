import React,{Component} from 'react';
import { Row, Col } from 'antd';
import '../sass/Login.scss';
import LoginForm from '../components/LoginFrom/LoginForm'

export default class Login extends Component{
    render(){
        return(
            <div className="LoginBox">
                <Row type="flex" align="middle" justify="end">
                    <Col span={8} pull={2} className="LoginForm">
                        <Col span={24}>
                            <h2>Login</h2>
                        </Col>
                        <LoginForm/>
                    </Col>
                </Row>
            </div>
        )
    }
}