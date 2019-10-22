import React from 'react'

class SearchBar extends React.Component {

    state = { term: '' }

    handleChange = (event) => {
        this.setState({ term: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {

        return (
            <form className='mt-3' onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search the most popular videos" value={this.state.term} onChange={this.handleChange} />
                    <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                </div>
            </form>
        )
    }
}

export default SearchBar;