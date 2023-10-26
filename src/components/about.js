function about({source}){
    const source= {
        srcs : "../images/demo.png"
        
    }
    return(
        <aside>
            <img src={source} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default about