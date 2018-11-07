import React from 'react';
import {Link} from 'react-router-dom';



const ChirpCard = (props) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header bg-secondary text-white">
                Chirp ID: {props.chirp.id}
                </div>
                    <div className="card-body">
                    <h5 className="card-title">{props.chirp.name} chirped: </h5>
                    <p className="card-text">{props.chirp.text}</p>
                    
                    <Link to={`/single/${props.chirp.id}`} className="btn btn-primary">View this Chirp!</Link>
                </div>
            </div>
        </div>
    );
};

export default ChirpCard;