import React from 'react';
import './ShowItem.css'
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ShowItem = (props) => {
    // console.log(props.products)
    const { name, image, price, type, _id } = props.products;


    const history = useHistory()
    const handleBuyProduct = _id => {
        history.push(`/details/${_id}`)
        // console.log('got specific product id :', _id)
    }

    return (
        <div className="col-md-3 my-3 mx-3 text-center justify-content-center">

            <Card className="card-holder text-info" style={{ width: '18rem', height: '26rem', margin: '20px' }}>
                <Card.Img className="cardImage" style={{ height: '13rem' }} variant="top" src={image} />
                <Card.Body>
                    <div className="text-center">

                        <Card.Title><h2>{name}</h2>
                        </Card.Title>
                        <Card.Text className="text-dark">
                            {type}
                        </Card.Text>
                        <Card.Footer className=""><span className="mr-3">Price : {price} </span><button onClick={() => handleBuyProduct(_id)} className="button">Buy Now</button></Card.Footer>


                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowItem;