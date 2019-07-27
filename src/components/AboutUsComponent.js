import React from 'react';
import {
    Jumbotron,
} from 'reactstrap';

const AboutUs = () => {
    return (
        <div className="container">
            <Jumbotron >
                <h1>About Us</h1>
                <p className="lead">This is a management site for Restaurants, you can simply login your restaurant and manage its
                    details and menu</p>
                <hr className="my-2" />
                <p className="lead">
                    <h4>For more information</h4>
                    <strong><a href="https://github.com/nikeshthapa255">GitHub</a></strong>
                    <br></br>
                    <strong><a href="mailto: nikeshthapa255@gmail.com">Email link</a></strong>
                </p>
            </Jumbotron>
        </div>
    );
}

export default AboutUs;