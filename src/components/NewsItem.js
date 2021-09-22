import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{ diplay: 'flex', justifyContent: "flex-end", position: 'absolute', right:'0'}}>
                        <span className="badge rounded-pill bg-danger" >{source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                    <img src={imageUrl !== '/' ? imageUrl : "https://source.unsplash.com/WLUHO9A_xik/1600x900"} className="" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...

                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By: {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
   
}

export default NewsItem
