import React from 'react';
import { Toast, ToastBody, Media } from 'reactstrap';
import { baseUrl } from '../api/baseUrl';

const Menu = (props) => {
    var options = [
        "p-3 bg-primary my-2 rounded",
        "p-3 bg-secondary my-2 rounded",
        "p-3 bg-success my-2 rounded",
        "p-3 bg-danger my-2 rounded",
        "p-3 bg-warning my-2 rounded",
        "p-3 bg-info my-2 rounded"
    ]
    var lenght = options.length
    var ch = 0
    const menu = props.dishes.map((dish) => {
        ch += 1
        return (
            <Toast className={options[ch % lenght] + " col-12 col-md-6 "}>
                <ToastBody>
                    <Media>
                        <Media left className="mx-1" >
                            <Media object src={baseUrl + dish.dishImage} width="100" height="100" alt="Dish Image" />
                        </Media>
                        <Media body>
                            <Media heading>
                                {dish.dishName}
                            </Media>
                            {dish.description}
                        </Media>
                    </Media>
                </ToastBody>
            </Toast>
        )
    })
    return (
        < div className="row">
            {menu}
        </ div>
    );
}

export default Menu;