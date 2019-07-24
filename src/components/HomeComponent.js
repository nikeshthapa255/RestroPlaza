import React, { Component } from 'react';
import { getRestaurants } from '../api/fetchWork';
import ShowRestro from './ShowRestaurantsComponent';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return ( 
            <div className="conatiner">
                <button onClick={()=> getRestaurants(this.props.token, this.props.saveRestros)}>CLick to elements</button>
                <button onClick={() => console.log(this.props.restaurants)} >Click to show elements</button>
                {this.props.isLogin ?
                    (<div className="row">
                        {this.props.restaurants.map((restro) => {
                            return (<div className="col-12 col-md-3">
                                <ShowRestro key={restro.id} image={restro.image} subtitle="Owner" title={restro.resturantName} text={restro.vision} />
                            </div>)
                        })}
                    </div>)
                    :(<p>Please enter your login credentials</p>)
                    }                   
            </div>
            
         );
    }
}

export default Home;