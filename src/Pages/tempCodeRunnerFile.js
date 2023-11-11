import React from 'react';
import ReactDOM from 'react-dom';
// import Dash from 'src/Pages/Dash.js';
// import Dash from './Dash.js';

import './styles.scss';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },

  ]);


const mode = 'signup';


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode
        }
    }
    toggleMode() {
        var newMode = this.state.mode === 'signup' ? 'login' : 'signup';
        this.setState({ mode: newMode});
    }
    render() {
        return (
            <div>
                <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
                <section className={`form-block form-block--is-${this.state.mode}`}>
                    <header className="form-block__header">
                        <h1>{this.state.mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
                        <div className="form-block__toggle-block">
                            <span>{this.state.mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &nbsp; &nbsp;&nbsp; &#8594;</span>
                            <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
                            <label htmlFor="form-toggler"></label>
                        </div>
                    </header>
                    <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
                </section>

            </div>
        )
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }
    // handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const { mode } = this.props;
    //     const form = event.target;
    //     const formData = new FormData(form);
    //     const url = mode === 'login' ? 'https://salmon-painter-hkkrg.pwskills.app:5000/login' : 'https://salmon-painter-hkkrg.pwskills.app:5000/signup';

    //     const data = {};
    //    if(mode === "login")
    //    {
    //     var email = document.getElementById("username").value;
    //     var password = document.getElementById("password").value;
    //     data.email =email;
    //     data.password = password;
    //    }
    //    else 
    //    {
    //     var email = document.getElementById("email").value;
    //     var password = document.getElementById("repeatpassword").value;
    //     data.email =email;
    //     data.password = password;
    //    }






    

    //     try {
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         if (!response.ok) {
    //             const error = await response.json();
    //             throw new Error(error.message);
    //         }

    //         // Redirect to dash.js after successful login or registration
    //        //  window.location.href = Dash;
            
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     }
    // };


    handleSubmit = async (event) => {
        event.preventDefault();
        const { mode } = this.props;
        const form = event.target;
        const formData = new FormData(form);
        const url = mode === 'login' ? 'https://salmon-painter-hkkrg.pwskills.app:5000/login' : 'https://salmon-painter-hkkrg.pwskills.app:5000/signup';
      
        const data = {};
      
        if (mode === "login") {
          var email = document.getElementById("username").value;
          var password = document.getElementById("password").value;
          data.email = email;
          data.password = password;
        } else {
          var email = document.getElementById("email").value;
          var password = document.getElementById("createpassword").value; // Use createpassword instead of password1
          data.email = email;
          data.password = password;
        }
        alert(email +password);
      
        try {
          console.log(data); // Log the data object
          const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    
        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Server error: ${error.message}`);
        }
    
        // Redirect to dash.js after successful login or registration
        // window.location.href = Dash;
    } catch (error) {
        console.error('Error:', error.message);
    }
      };
      
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <Input type="text" id="username" label="email" disabled={this.props.mode === 'signup'}/>
                    <Input type="password" id="password" label="password1" disabled={this.props.mode === 'signup'}/>
                </div>
                <div className="form-group form-group--signup">
                    <Input type="text" id="fullname" label="full name" disabled={this.props.mode === 'login'} />
                    <Input type="email" id="email" label="email" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="createpassword" label="password" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="repeatpassword" label="repeat password" disabled={this.props.mode === 'login'} />
                </div>
            </div>
            <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
        </form>
        )
    }
}

const Input = ({ id, type, label, disabled }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
);

const App = () => (
    <div className={`app app--is-${mode}`}>
        <LoginComponent
            mode={mode}
            onSubmit={
                function() {
                    console.log('submit');
                }
            }
        />
    </div>
);

export default LoginComponent;
