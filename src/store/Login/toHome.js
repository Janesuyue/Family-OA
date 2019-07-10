var ToHome = (state='',action)=>{
    switch (action.type){
        case 'toHome':
            let data = action.text
            data = true
            console.log(data)
            return data
        default:
            return state
    }
}

export default ToHome