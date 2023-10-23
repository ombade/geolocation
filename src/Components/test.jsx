import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles.scss';

// ... Your existing code remains unchanged ...

class LoginComponent extends React.Component {
    // ... Your existing code remains unchanged ...

    handleLoginSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        axios.post('http://www.flask/login', {
            username: data.get('username'),
            password: data.get('password')
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
    };

    handleRegisterSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        axios.post('http://www.flask/register', {
            fullname: data.get('fullname'),
            email: data.get('email'),
            password: data.get('createpassword'),
            repeatpassword: data.get('repeatpassword')
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
    };

    render() {
        return (
            <div>
                {/* Your existing JSX code remains unchanged */}
                <LoginForm mode={this.state.mode} onLoginSubmit={this.handleLoginSubmit} onRegisterSubmit={this.handleRegisterSubmit} />
            </div>
        );
    }
}

// ... Your existing code remains unchanged ...

class LoginForm extends React.Component {
    // ... Your existing code remains unchanged ...

    render() {
        return (
            <form onSubmit={this.props.mode === 'login' ? this.props.onLoginSubmit : this.props.onRegisterSubmit}>
                {/* Your existing JSX code remains unchanged */}
            </form>
        );
    }
}

// ... Your existing code remains unchanged ...

export default LoginComponent;
