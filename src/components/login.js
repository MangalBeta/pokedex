import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    responseFacebook = (response) => {
        this.props.loginUser(response).then((res) => {
            this.props.router.push('pokedex')
            console.log("res")
        }).catch((err) => {
            alert("Error to saved user")
            console.log(err)
        })
    }

    render() {
        return (
            <div className="main-div">
              
                <form id="Login">
                    <FacebookLogin
                        appId="2118209848252098"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        cssClass="fbbtn"
                        size={'large'}
                    />

                </form>
            </div>

        )
    }
}

export default Login
