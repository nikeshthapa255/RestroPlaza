import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap';

class ShowRestro extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Card className="col-4 col-md-2" >
                <CardImg top width="100%" height="150" src={this.props.image} alt="Ower Image"></CardImg>
                <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                    <CardText>{this.props.text}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default ShowRestro;