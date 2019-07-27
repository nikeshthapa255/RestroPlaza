import React, { Component } from 'react';
import { Row, Form, FormGroup } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + JSON.stringify(this.state));
        event.preventDefault();
        this.props.login(this.state.username, this.state.password)
        this.setState({ username: "", password: "" })
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <h1>Login</h1>
                </Row>
                <Row>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}></input>
                        </FormGroup>
                        <FormGroup>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"></input>
                        </FormGroup>
                        <FormGroup>
                            <input type="submit" className="text-primary"></input>
                        </FormGroup>
                    </Form>
                </Row>
            </div>
        );
    }
}


export default Login;