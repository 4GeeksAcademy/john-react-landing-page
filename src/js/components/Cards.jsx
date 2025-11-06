import React from "react";

const Cards = (props) => {
    return (
        <div className="card" style={{width: "30rem"}}>
            <img src={props.imgUrl} className="card-img-top" alt="..." style={{height: "200px", objectFit: "cover",width: "100%"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className="border-top pt-3 justify-content-center d-flex">       
                    <a href={props.buttonUrl} className="btn btn-primary" target="_blank">{props.buttonLabel}</a>
                    </div>
                </div>
        </div>

    )
}
export default Cards;