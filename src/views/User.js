import React, { Component } from "react";
import { Input, Button, Radio, Icon, Table, Divider, Tag } from "antd";
// import "../sass/User.scss";
const { Search } = Input;
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: "1",
    name: "John",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];
export default class User extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div>
        <h2>用户信息</h2>
        <Search
          placeholder="填入关键字"
          enterButton="搜索"
          size="large"
          onSearch={value => console.log(value)}
        />
        {/*<Button type="primary" size="large">
          Primary
    </Button>*/}
        <Table dataSource={data}>
          <Column title="用户名" dataIndex="name" key="name" />
          <Column title="密码" dataIndex="age" key="age" />
          <Column title="昵称" dataIndex="address" key="address" />
          <Column title="头像" dataIndex="address" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={tags => (
              <span>
                {tags.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </span>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a href="javascript:;">Invite {record.lastName}</a>
                <Divider type="vertical" />
                <a href="javascript:;">删除</a>
              </span>
            )}
          />
        </Table>
      </div>
    );
  }
}
