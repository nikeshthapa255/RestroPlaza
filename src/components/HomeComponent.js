import React, { Component } from 'react';
import { getRestaurants } from '../api/fetchWork';
import ShowRestro from './ShowRestaurantsComponent';
import { baseUrl } from '../api/baseUrl';
import { Media } from "reactstrap";
import Menu from './MenuComponent';
import AddDish from "./AddDishComponent";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {

        return (
            <div className="container">
                <button className="btn btn-primary" onClick={() => getRestaurants(this.props.saveRestros)}>CLick to elements</button>
                <button className="btn btn-info" onClick={() => console.log(this.props.restaurants)} >Click to show elements</button>
                <div className="jumbotron">

                    {this.props.isLogin ?
                        (<>

                            <h1 className="display-3">Welcome</h1>
                            <div className="lead">
                                <Media>
                                    <Media left className="mx-3">
                                        <Media object src={baseUrl + this.props.MainRestro.image} width="100" height="100" alt="Owner Restro" />
                                    </Media>
                                    <Media body>
                                        <div className="row">
                                            <Media heading className="col-3">
                                                {this.props.MainRestro.restaurantName}</Media>
                                            < AddDish MainRestro={this.props.MainRestro} token={this.props.token} />
                                        </div>
                                        {this.props.MainRestro.vision}
                                    </Media>
                                </Media>
                                <Menu dishes={this.props.MainRestro.dish} />
                            </div>
                        </>)
                        : (<h1 className="display-3">Please enter your login credentials</h1>)
                    }

                    <hr className="my-2" />

                </div>

                <div className="row">
                    {this.props.restaurants.map((restro) => {
                        return (
                            <ShowRestro key={restro.id} image={baseUrl + restro.image} subtitle="Owner" title={restro.resturantName} text={restro.vision} />)
                    })}
                </div>
            </div>

        );
    }
}

export default Home;