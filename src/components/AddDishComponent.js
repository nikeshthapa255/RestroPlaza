import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { postDish } from '../api/fetchWork';

class AddDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            description: "",
            dishImage: null,
            dishName: "",
        }
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);

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
        post.append('dishImage', this.state.dishImage, this.state.dishImage.name);
        post.append('dishName', this.state.dishName);
        post.append('description', this.state.description);
        post.append('owner', this.props.MainRestro.id);
        return post;
    }
    handleSubmit(event) {
        event.preventDefault();
        postDish(this.props.MainRestro.id,
            this.createData(),
            this.props.token,
            this.props.setMainRestro)
        this.toggle()
    }
    handleImageChange = (e) => {
        this.setState({
            dishImage: e.target.files[0]
        })
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        console.log(this.props.MainRestro.id)
        return (
            <div >
                <button className="btn btn-dark " onClick={this.toggle}><i className="fa fa-plus text-danger" aria-hidden="true"></i></button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Enter Dish Elements</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup className="row">
                                <Label md={2} htmlFor="dishName">
                                    Dish Name
                                            </Label>
                                <Col md={10}>
                                    <Input type="text"
                                        value={this.state.dishName}
                                        name="dishName" id="dishName"
                                        onChange={this.handleChange}
                                        placeholder="Dish Name"></Input>
                                </Col>
                            </FormGroup>

                            <FormGroup className="row">
                                <Label md={2} htmlFor="description">
                                    Description</Label>
                                <Col md={10}>

                                    <Input type="textarea"
                                        value={this.state.description}
                                        name="description" id="description"
                                        onChange={this.handleChange}
                                        placeholder="Description of dish"
                                        rows="5"></Input>
                                </Col></FormGroup>
                            <FormGroup className="row">
                                <Label md={2} htmlFor="dishImage">
                                    Vision</Label>
                                <Col md={10}>

                                    <Input type="file"
                                        name="dishImage" id="dishImage"
                                        onChange={this.handleImageChange}
                                        placeholder="Dish Image"></Input>
                                </Col></FormGroup>
                            <input type="submit" className="text-primary"></input>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <strong>Congratulations on your new Dish</strong>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AddDish;