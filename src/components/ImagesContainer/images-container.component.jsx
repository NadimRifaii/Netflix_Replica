import React, { useState, useEffect } from 'react';
import './images-container.styles.css'
import ImageCard from '../imageCard/image-card.component.jsx'
import { getSimilarMovies } from '../../utils/api.utils.js';

const ImagesContainer = () => {
    const [images, setImagesArray] = useState([]);
    const id = 507089;

    useEffect(() => {
        async function getSimilar() {
            const data = await getSimilarMovies(id);
            setImagesArray(data)
        }
        getSimilar()
    }, [])
    console.log(images)
    return (
        <div className="images-container">
            {
                Object.keys(images).length > 0 &&
                images.map((image, index) => {
                    return <ImageCard key={index} imageUrl={image.poster_path} />
                })
            }
        </div>
    )
}

export default ImagesContainer;