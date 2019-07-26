import React from 'react';
import { Toast, ToastBody, ToastHeader, Media } from 'reactstrap';
import { baseUrl } from '../api/baseUrl';

const Menu = (props) => {
    var options=[
        "p-3 bg-primary my-2 rounded",
        "p-3 bg-secondary my-2 rounded",
        "p-3 bg-success my-2 rounded",
        "p-3 bg-danger my-2 rounded",
        "p-3 bg-warning my-2 rounded",
        "p-3 bg-info my-2 rounded"
    ]
    var lenght= options.length
    var ch=0
    const menu = props.dishes.map((dish) =>{ 
        ch+=1
        return(
        < div className={options[ch%lenght]+" col-6 "}>
            <Toast>
                <ToastHeader>
                    {dish.name}
                </ToastHeader>
                <ToastBody>
                    <Media>
                        <Media left >
                            <Media object src={baseUrl + dish.dishImage } width="100" height="100" alt="Dish Image" />
                        </Media>
                        <Media body>
                            <Media heading>
                            {dish.description}
                            </Media>
                        </Media>
                    </Media>
                </ToastBody>
            </Toast>
        </div>
    )})
    return ( 
        < div className="row">
            {menu}
        </ div>
     );
}
 
export default Menu;