import "./Singlepost.css"

const Singlepost = ({ post }) => {
    const {id, title, contentType, url, dateCreated} = post;

    return ( 
        <div id={id} className="post" key={id}> 
            <div className="title-post-container">
                <h3>{title}</h3>     
            </div>
            <hr/>
            <div className="content-post-container">
                <p className="content-type-post">{contentType}</p>
                <a className="url-post" target="_blank" rel="noopener" href={url}>
                    <p>Ir!</p>
                </a>
                <p className="date-post">{dateCreated}</p>
            </div>
            
        </div>
    );
}

export default Singlepost;