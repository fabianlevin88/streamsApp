import React                            from 'react';
import {Router, Route} from 'react-router-dom'
import StreamList                       from './streams/StreamList'
import StreamCreate                     from './streams/StreamCreate';
import StreamDelete                     from './streams/StreamDelete';
import StreamEdit                       from './streams/StreamEdit';
import StreamShow                       from './streams/StreamShow';
import Header                           from './Header';
import history                          from '../history';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <Header />
                    <div className="ui raised segment">
                        <Route path='/' exact component={StreamList} />
                        <Route path='/streams/create' exact component={StreamCreate} />
                        <Route path='/streams/delete/:id' exact component={StreamDelete} />
                        <Route path='/streams/edit/:id' exact component={StreamEdit} />
                        <Route path='/streams/show/:id' exact component={StreamShow} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;