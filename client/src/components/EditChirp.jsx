import React, { Component } from 'react';

class EditChirp extends Component {
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

    async handleEdit(e) {
        e.preventDefault();

        let editChirp = {
            text: this.state.text
        };
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editChirp)
            });
            this.props.history.replace(`/single/${this.props.match.params.id}`);
        } catch (e) {
            console.log(e);
        }

    }
    render() {
        return (
            <form className="border p-3">
                <div class="form-group">
                    <h5><i>{this.state.name}</i>, edit your chirp: </h5>
                    <input class="form-control" placeholder="What are your thoughts?" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={(e) => this.handleEdit(e)}> Edit It!</button>
            </form>
        );
    }
};

export default EditChirp;