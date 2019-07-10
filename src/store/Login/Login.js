var Login = (state='',action)=>{
    switch (action.type){
        case 'Login':
            let data = action.text
            // console.log(data)
            let str = JSON.stringify(data)
            // console.log(str)
            localStorage.setItem("spaLogin",str)
            return data
        default:
            return state
    }
}

export default Login