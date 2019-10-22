import React from 'react'


class VideoItem extends React.Component {

    whenSelected = () => {
        this.props.onSelect(this.props.data)
    }

    render() {

        const { id, snippet } = this.props.data;

        return (
            <div className="card m-2 p-2" style={{ width: '18rem' }}>
                <img src={snippet.thumbnails.high.url} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{snippet.title}</h5>
                    <button className='btn btn-primary' onClick={this.whenSelected}>Select Video</button>

                </div>
            </div>
        )
    }
}

export default VideoItem