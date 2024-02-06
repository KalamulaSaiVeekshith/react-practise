function Child(props){
    { console.log("PROPS",props) }
    return(
        <>

            { props.data ? props.data.map((ele)=>{
               return <div>{ele.title}</div>
            }) : <div>No data</div> }
        </>

    )
}

export default Child