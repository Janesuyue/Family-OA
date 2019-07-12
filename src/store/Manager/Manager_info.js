var Manager_info = (state='',action)=>{
    switch (action.type){
        case 'Manager':
            let data = action.text
            // console.log(data)
            let str = JSON.stringify(data)
            // console.log(str)
            localStorage.setItem("Manager",str)
            return data
        default:
            return state
    }
}

export default Manager_info