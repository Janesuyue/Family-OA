var Action = {
    LoginItem:function(msg){
        return{
            type:'Login',
            text:msg
        }
    },
    toHomeItem:function(msg){
        return{
            type:'toHome',
            text:msg
        }
    }
}

export default Action