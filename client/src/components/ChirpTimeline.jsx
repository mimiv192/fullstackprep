import React, { Component } from 'react';
import ChirpCard from './ChirpCard';

class ChirpTimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirps: []
        };
    }


    async componentDidMount() {
        try {
            let res = await fetch('/api/chirps');
            let chirps = await res.json();
            console.log(chirps);
           this.setState ({chirps});
        } catch (e) {
            console.log(e);
        }
    }
    renderChirps() {
        return this.state.chirps.map(chirps => {
            return <ChirpCard key={chirps.id} chirp={chirps} />
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderChirps()}

            </div>
        );
    }
};

export default ChirpTimeline;