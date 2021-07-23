import React from 'react';
import '../Signin/Signin.css';

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name:'',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name : event.target.value})
    };

    onEmailChange = (event) => {
        this.setState({email : event.target.value})
    };

    onPasswordChange = (event) => {
        this.setState({password : event.target.value})
    };

    onSubmitCreateAccount = () => {
        fetch("http://localhost:3000/register",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(user => {
            if(user){
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        });
    }

    render() {
        return (
            <article className=" article br3 mv4 center shadow-2 pa4">
                <form className="form w-100">
                    <div className='fieldset' id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 center">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                        onChange={this.onNameChange}
                        className="email input pa2 input-reset bg-transparent w-100 f6" 
                        type="text" 
                        name="user-name"  
                        id="user-name" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                        onChange={this.onEmailChange}
                        className="email input pa2 input-reset bg-transparent w-100 f6" 
                        type="email" 
                        name="email-address"  
                        id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input
                        onChange={this.onPasswordChange} 
                        className="password input pa2 input-reset bg-transparent w-100 f6" 
                        type="password" 
                        name="password"  
                        id="password" />
                    </div>
                    </div>
                    <div className="">
                        <input className="btn b ph3 pv2 input-reset br2 dim pointer f6 dib" onClick={this.onSubmitCreateAccount} type="button" value="Create Account" />
                    </div>
                </form>
            </article>
        );
    };
}

export default Register;