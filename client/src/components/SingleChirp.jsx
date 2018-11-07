import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirp: {}
        };
    }


    async componentDidMount() {
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`);
            let chirp = await res.json();
            this.setState({ chirp });
        } catch (e) {
            console.log(e);
        }
    }
    async handleDelete() {
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`, {
                method: 'DELETE'
            });
            this.props.history.replace('/');
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-2">
                        <div className="card-header bg-secondary text-white d-flex align-items-center justify">
                            Chirp ID: {this.props.match.params.id}
                            <button class="btn btn-danger" onClick={() => this.handleDelete()}>X</button>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"> {this.state.chirp.user} chirped: </h5>
                            <p className="card-text"> {this.state.chirp.text}</p>
                            <div className="d-flex justify-content-between">
                                <Link to={`/`} className="btn btn-primary">Back to All Chirps!</Link>
                                <Link to={`/edit/${this.props.match.params.id}`} className="btn btn-info">Edit this Chirp!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        );    
    }
 };
        
export default SingleChirp;