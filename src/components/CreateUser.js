import React, { Component } from 'react';
import Loading from "./LoadingComponent";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Col
} from "reactstrap";
import { postUser, postRestaurant } from '../api/fetchWork';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            restaurantName: "",
            vision: "",
            id: -1,
            image: null,
            isSubmited: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.createData = this.createData.bind(this);

    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    createData() {
        let post = new FormData();
        post.append('image', this.state.image, this.state.image.name);
        post.append('restaurantName', this.state.restaurantName);
        post.append('vision', this.state.vision);
        post.append('user', this.state.id);
        return post
    }

    handleSubmit(event) {
        this.setState({ isSubmited: true })
        event.preventDefault();

        alert('A name was submitted: ' + JSON.stringify(this.state));
        postUser(this.state.username, this.state.password, this.state.email, (value) => {
            this.setState({
                id: value
            });
            return this.createData()
        }, (data) => this.props.login(this.state.username, this.state.password, data), this.props.isLogin, this.props.token)
    }
    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }
    render() {
        if ((this.state.id == -1) && (this.state.isSubmited))
            return <Loading />
        else
            return (
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-3 my-5">Register your restaurant <span className="fa fa-cutlery fa-lg"></span></h1>

                        <div className="row">
                            <div className="col-12 col-md-9">
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup className="row">
                                        <Label md={2} htmlFor="username">
                                            Username
                                            </Label>
                                        <Col md={10}>
                                            <Input type="text"
                                                value={this.state.username}
                                                name="username" id="username"
                                                onChange={this.handleChange}
                                                placeholder="Username"></Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="row">
                                        <Label md={2} htmlFor="password">
                                            Password</Label>
                                        <Col md={10}>

                                            <Input type="password"
                                                value={this.state.password}
                                                name="password" id="password"
                                                onChange={this.handleChange}
                                                placeholder="Password"></Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="row">
                                        <Label md={2} htmlFor="email">
                                            Email</Label>
                                        <Col md={10}>

                                            <Input type="email"
                                                value={this.state.email}
                                                name="email" id="email"
                                                onChange={this.handleChange}
                                                placeholder="Email"></Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="row">
                                        <Label md={2} htmlFor="restaurantName">
                                            Restaurant Name</Label>
                                        <Col md={10}>

                                            <Input type="text"
                                                value={this.state.restaurantName}
                                                name="restaurantName" id="restaurantName"
                                                onChange={this.handleChange}
                                                placeholder="Restaurant Name"></Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="row">
                                        <Label md={2} htmlFor="vision">
                                            Vision</Label>
                                        <Col md={10}>

                                            <Input type="textarea"
                                                value={this.state.vision}
                                                name="vision" id="vision"
                                                onChange={this.handleChange}
                                                placeholder="Vision For Restaurant"
                                                rows="5"></Input>
                                        </Col></FormGroup>
                                    <FormGroup className="row">
                                        <Label md={2} htmlFor="image">
                                            Vision</Label>
                                        <Col md={10}>

                                            <Input type="file"
                                                name="image" id="image"
                                                onChange={this.handleImageChange}
                                                placeholder="Image"></Input>
                                        </Col></FormGroup>
                                    <input type="submit" className="text-primary"></input>
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>

            );
    }
}

export default CreateUser;