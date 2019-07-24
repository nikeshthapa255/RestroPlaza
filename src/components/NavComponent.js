import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem

} from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    toggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (

            <Navbar dark expand="md" color="dark">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNavbar} className="mx-1"/>
                    <Link className="text-danger mr-auto" to="/home"><span className="fa fa-cutlery fa-lg"></span></Link>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to='/login' className="nav-link " >
                                    <span className="fa fa-sign-in fa-lg text-primary">Login</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg text-primary"> About Us</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/createUser">
                                    <span className="fa fa-plus text-primary" aria-hidden="true" >  Restaurant</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    { this.props.isLogin ? 
                    (<button className="btn btn-danger" onClick={this.props.logout}>
                        <i className="fa fa-sign-out" aria-hidden="true">Logout</i>
                        </button>) :
                    <></>}
                </div>
            </Navbar>

        );
    }
}

export default Header;