import React, { Component } from 'react';

class DeleteChirp extends Component {
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

        let deleteChirp = {
            text: this.state.text
        };
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(deleteChirp)
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
                    <h5><i>{this.state.name}</i>, delete your chirp: </h5>
                    <input class="form-control" placeholder="What are your thoughts?" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={(e) => this.handleEdit(e)}> Delete It!</button>
            </form>
        );
    }
};

export default DeleteChirp;