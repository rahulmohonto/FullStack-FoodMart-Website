import axios from 'axios';
import React, { useState } from 'react';
import FakeData from '../FakeData/FakeData.json'
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [image, setImage] = useState(null);

    const onSubmit = data => {
        console.log(data)
        const eventData = {
            name: data.name,
            image: image,
            price: data.price
        }
        const url = `http://localhost:4200/addProduct`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response :', res))

    };

    // server start formula code =  npm run start:dev 

    const handleImageUpload = event => {
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'f2819ebc8fd1ee226642d4fd74590224')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    return (
        <div>
            <h5>add items and items list</h5>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue="New Avaiable Product" />
                <input name="price" defaultValue="price" type="number" />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />


                <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;