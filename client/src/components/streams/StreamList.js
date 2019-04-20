import React             from 'react';
import { connect }       from 'react-redux';
import { fetchStreams }  from '../../actions/index';
import { Link }          from 'react-router-dom';

import "../../styles/createStream.css"

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            const editNav = `/streams/edit/${stream.id}`;
            const deleteNav = `/streams/delete/${stream.id}`;
            return (
                <div className="right floated content">
                    <Link to={editNav} className="ui button primary">Edit</Link>
                    <Link to={deleteNav} className="ui button negative">Delete</Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <h4>{stream.title.toUpperCase()}</h4>
                        <div className="description">
                            <p>{stream.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return(
                <div id="createStream">
                    <Link to="/streams/create" className="ui button positive">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
} 

export default connect(mapStateToProps, { fetchStreams })(StreamList);