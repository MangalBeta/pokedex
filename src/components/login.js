import React, { Component } from 'react'
import { Col, Row, Clearfix } from 'react-bootstrap/lib/';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
     responseFacebook = (response) => {
        console.log("response",this,this.props)
        this.props.loginUser(response).then((res) =>{
            this.props.router.push('pokedex')
            console.log("res")
        }).catch((err) =>{
            alert("Error to saved user")
            console.log(err)
        })
      }
      
    render() {
        return (
            <div className="login_page">
                <FacebookLogin
                    appId="1977938825850378"
                    autoLoad={true}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    cssClass="fbbtn"
                    size={'large'}
                />
            </div>
        )
    }
}

export default Login
