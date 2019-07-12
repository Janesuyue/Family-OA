var Action = {
    LoginItem:function(msg){
        return{
            type:'Login',
            text:msg
        }
    },
    Manager_info:function(msg){
        return{
            type:'Manager',
            text:msg
        }
    },
    UsersList:function(msg){
        return{
            type:'UsersList',
            text:msg
        }
    },
    UsersListDel:function(msg){
        return{
            type:'UsersListDel',
            text:msg
        }
    }
}

export default Action