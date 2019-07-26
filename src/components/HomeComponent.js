import React, { Component } from 'react';
import { getRestaurants } from '../api/fetchWork';
import ShowRestro from './ShowRestaurantsComponent';
import { baseUrl, base } from '../api/baseUrl';
import { Media } from "reactstrap";
import Menu from './MenuComponent';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        if (this.props.isLogin)
            this.props.MainRestro.dish=[{
                "description": "asdasd",
                "dishImage": "/media/dishImage/IMG_20180921_142142.jpg",
                "dishName": "Yummy",
                "id": 7,
                "join_date": "2019-07-26T09:23:46.020473Z",
                "owner": 10
            },
            {
                "description": "asdasd",
                "dishImage": "/media/dishImage/IMG_20180921_142142.jpg",
                "dishName": "Yummy",
                "id": 7,
                "join_date": "2019-07-26T09:23:46.020473Z",
                "owner": 10
            },
            {
                "description": "asdasd",
                "dishImage": "/media/dishImage/IMG_20180921_142142.jpg",
                "dishName": "Yummy",
                "id": 7,
                "join_date": "2019-07-26T09:23:46.020473Z",
                "owner": 10
            }]
        return (
            <div className="container">
                <button onClick={() => getRestaurants(this.props.saveRestros)}>CLick to elements</button>
                <button onClick={() => console.log(this.props.restaurants)} >Click to show elements</button>
                <div class="jumbotron">

                    {this.props.isLogin ?
                        (<>
                            
                            <h1 className="display-3">Welcome</h1>
                            <div className="lead">
                                <Media>
                                    <Media left className="mx-3">
                                        <Media object src={baseUrl + this.props.MainRestro.image} width="100" height="100"  alt="Owner Restro" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            {this.props.MainRestro.restaurantName}
                                        </Media>
                                        {this.props.MainRestro.vision}
                                    </Media>
                                </Media>
                                <Menu dishes = {this.props.MainRestro.dish}/>
                            </div>
                        </>)
                        : (<h1 class="display-3">Please enter your login credentials</h1>)
                    }

                    <hr class="my-2" />

                </div>

                <div className="row">
                    {this.props.restaurants.map((restro) => {
                        return (<div className="col-4 col-md-2">
                            <ShowRestro key={restro.id} image={baseUrl + restro.image} subtitle="Owner" title={restro.resturantName} text={restro.vision} />
                        </div>)
                    })}
                </div>
            </div>

        );
    }
}

export default Home;