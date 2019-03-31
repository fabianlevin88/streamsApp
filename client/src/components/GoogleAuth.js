import React from 'react';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null }
    
    componentDidMount() {
        const clientID = "420241021800-l8uffqs1nb8qcj4b63tmv05l14c5gtnn.apps.googleusercontent.com";

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: clientID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }
    
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        console.log(this.state.isSignedIn)
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign in
                </button>
            )
        }
    } 

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;