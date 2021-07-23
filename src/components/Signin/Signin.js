import React from 'react';
import './Signin.css';

// = ({onRouteChange}) =>
class Signin extends React.Component  {
    constructor (props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail : event.target.value})
    };

    onPasswordChange = (event) => {
        this.setState({signInPassword : event.target.value})
    };

    onSubmitSignIn = () => {
        fetch("http://localhost:3000/signin",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data == "success"){
                this.props.onRouteChange('home');
            }
        });
    }

    render () {
        return (
            <article className=" article br3 mv4 center shadow-2 pa4">
                <form className="form w-100">
                    <div className='fieldset' id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            onChange={this.onEmailChange}
                            className="email input pa2 input-reset bg-transparent w-100 f6" 
                            type="email" 
                            name="email"  
                            id="email" 
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input
                            onChange={this.onPasswordChange} 
                            className="password input pa2 input-reset bg-transparent w-100 f6" 
                            type="password" 
                            name="password"  
                            id="password" 
                        />
                    </div>
                    </div>
                    <div className="">
                    <input className="btn b ph3 pv2 input-reset br2 dim pointer f6 dib" onClick={this.onSubmitSignIn} type="button" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim black db pointer" onClick={() => this.props.onRouteChange('register')}>Register</p>
                    </div>
                </form>
            </article>
        );
    }
}

export default Signin;