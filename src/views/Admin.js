import React, { Component } from "react";
import { Form, Input, Button, Radio } from "antd";
export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: "horizontal"
    };
  }
  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : null;
    const buttonItemLayout =
      formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null;
    return (
      <div>
        <h2>管理员信息</h2>
        <Form layout={formLayout}>
          <Form.Item label="用户名" {...formItemLayout}>
            <Input value="admin" />
          </Form.Item>
          <Form.Item label="旧密码" {...formItemLayout}>
            <Input value="admin" />
          </Form.Item>
          <Form.Item label="新密码" {...formItemLayout}>
            <Input placeholder="请输入新密码" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">保存</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
