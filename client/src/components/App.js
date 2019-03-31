import React                            from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import StreamList                       from './streams/StreamList'
import StreamCreate                     from './streams/StreamCreate';
import StreamDelete                     from './streams/StreamDelete';
import StreamEdit                       from './streams/StreamEdit';
import StreamShow                       from './streams/StreamShow';
import Header                           from './Header';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router>
                    <Header />
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/create' exact component={StreamCreate} />
                    <Route path='/streams/delete' exact component={StreamDelete} />
                    <Route path='/streams/edit' exact component={StreamEdit} />
                    <Route path='/streams/show' exact component={StreamShow} />
                </Router>
            </div>
        )
    }
}

export default App;