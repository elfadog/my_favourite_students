function Message(){

    const name = 'Kishan'
    if(name)
        return <h1>Welcome to ManageMe {name}</h1>;
    return <h1>Welcome to ManageMe Friend</h1>
}

export default Message;