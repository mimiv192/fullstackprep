import React, { Component } from 'react';


class addChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: ''
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`);
            let chirp = await res.json();
            this.setState({ name: chirp.name, text: chirp.text });
        } catch (e) {
            console.log(e);
        }
    }

    async handleDelete(e) {
        e.preventDefault();

        let addChirp = {
            text: this.state.text
        };
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addChirp)
            });
            this.props.history.replace(`/single/${this.props.match.params.id}`);
        } catch (e) {
            console.log(e);
        }

    }


    render() {
        return (
            <form className="chirp-form">
                <label for="name"> Name</label>
                <input className="u-full-width" type="text" id="name" name="name" />
                <label for="content"> Chirp </label>
                <textarea className="u-full-width" type="text" id="content" name="content"></textarea>
                <button className="button-primary">Send Your Chirp</button>
            </form>
        );
    }
};

export default AddChirp;