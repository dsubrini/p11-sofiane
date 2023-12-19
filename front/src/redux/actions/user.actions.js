

export const login =() =>{
    fetch("mongodb://localhost:27017/users")
.then((response)=>{
    if (response.ok) {
        return response.json();
    }
})
.then((response) => {
    if (response.status === 200){
        dispatch(login({...response.body}));
        return Navigate('/user')
    }
})
}
export default login;