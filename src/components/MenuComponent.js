import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

    function RendermenuItem({ dish, onClick }) {
        return (    
            <Card onClick={() => onClick(dish.id)}> {/* There is some error here*/}
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RendermenuItem dish={dish} onClick={props.onClick} />
                </div>
            )
        }); 

        return (
            <div className="container">
                <div className="row">
                        {menu} 
                </div>           
            </div>
        );
    }


export default Menu;