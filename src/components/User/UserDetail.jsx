import React, { Component } from 'react'
import axios from 'axios'

const fakeDataUrl = 'http://api.cat-shop.penkuoer.com/api/v1/admin/users'
const token = JSON.parse(localStorage.getItem('spaLogin')).tokem;

class UserDetail extends Component{
    // constructor(props){
    //     super(props)
    // }
    componentDidMount(){
        // console.log(this.props.location.query.id)
        axios({
            url: fakeDataUrl + "/" + this.props.location.query.id,
            method: 'get',
            headers: { 'Accept': 'application/json', 'Authorization': 'Bearer ' + token },
            }).then(res => {
                console.log(res)
            // this.setState({list:res.data.users})
            // Store.dispatch(Action.UsersList(res.data.users))
        })
    }
    render(){
        return(
            <div>
                详情
            </div>
        )
    }
}

export default UserDetail