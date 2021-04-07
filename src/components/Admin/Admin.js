import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Admin.css';



const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null);

    const onSubmit = data => {
        console.log(data)
        const eventData = {
            name: data.name,
            image: image,
            price: data.price,
            type: data.type,
            quantity: data.quantity
        }
        const url = `https://polar-taiga-18543.herokuapp.com/addProduct`;
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
            <h5 className="header text-center"> Have Idea 🤔 About New Food <br />Add Food & Grocery items</h5>
            <div className="form-container mt-4 p-5">
                <form className="field w-50 justify-content-center" onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" className="form" required defaultValue="New Avaiable Product" {...register("name")} />
                    <input name="type" className="form" required defaultValue="product Type" {...register("type")} />
                    <input name="price" className="form" required defaultValue="price & dollar sign required" type="text"  {...register("price")} />
                    <br />
                    <input name="quantity" className="form" required defaultValue="quantity" type="text" {...register("quantity")} />
                    <br />
                    <input name="exampleRequired" required className="form" type="file" onChange={handleImageUpload} />

                    <input className="form" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Admin;