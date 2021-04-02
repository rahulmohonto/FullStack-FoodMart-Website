import React from 'react';
import './ShowItem.css'
import { Card } from 'react-bootstrap';

const ShowItem = (props) => {
    // console.log(props.products)
    const { name, image, price, type } = props.products;

    return (
        <div className="col-md-3 my-3 mx-3 text-center justify-content-center">

            <Card className="card-holder text-info" style={{ width: '18rem', height: '26rem', margin: '20px' }}>
                <Card.Img className="cardImage" variant="top" src={image} />
                <Card.Body>
                    <div className="text-center">

                        <Card.Title><h2>{name}</h2>
                        </Card.Title>
                        <Card.Text className="text-dark">
                            {type}
                        </Card.Text>
                        <Card.Footer className=""><span className="mr-3">Price : {price} </span><button className="button">Buy Now</button></Card.Footer>


                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowItem;