import React from "react"
export default function Main(props){
    return(
        <div className="card">
            <img
                src={props.imageUrl}
                // src={`../images/${props.coverImg}`}
                className="coverImg"

                
            />
            <div className="card-stats">
                <h5 className="location">📌 {props.location}</h5>
                <p className="title">{props.title}</p>
                <h4 className="date">{props.startDate} - {props.endDate}</h4>
                {/* <link to={props.googleMapsUrl}>View on Google Maps</link> */}
                <h3 className = "description">{props.description}</h3>
            </div>
        </div>
    )
}