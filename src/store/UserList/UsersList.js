var UsersList = (state=[],action)=>{
    switch (action.type){
        case 'UsersList':
            let arr = [...state]
            arr.push(action.text)
            return arr[0]
        case 'UsersListDel':
            let arr1 = [...state]
            arr1.splice(action.text,1)
            console.log(arr1)
            return arr1
        default:
            return state
    }
}

export default UsersList