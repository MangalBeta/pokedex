import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap/lib'
import { Link,browserHistory } from 'react-router';


class Layout1 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


logoutUser = () =>{
        this.props.logOutUser().then((res) =>{
            browserHistory.replace('/');
        })
}
    render() {
        console.log(this.props,"jjhkjh")

        const brandStyle = {
            fontWeight: 'bold',
            textTransform: 'caplitalize',
            paddingLeft: 10,
            fontSize: '1.2em'
        };
        return (
            <div>
                <Navbar bsStyle='inverse'>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/pokedex"><span style={brandStyle}>Pokedex</span></Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1}>
                            <Link to="/profile">
                            {this.props.user ? this.props.user.name : ''}
                            </Link>

                        </NavItem>
                            <NavItem eventKey={1} onClick={this.logoutUser}>
                       
                            logout
                        </NavItem>
                    </Nav>
                </Navbar>
                <div >
                    {this.props.children}
                </div>

            </div>
        )
    }
}
export default Layout1;
