function Child(props)
{
    const data="purvisha"
    return(
        <div>
            <h1>USER NAME:  {props.name}</h1>
        <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
        
    )
}

export default Child;