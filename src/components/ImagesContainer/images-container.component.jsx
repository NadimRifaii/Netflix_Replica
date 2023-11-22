import React, { useState, useEffect } from 'react';
import './images-container.styles.css'
import ImageCard from '../imageCard/image-card.component.jsx'
import { getSimilarMovies } from '../../utils/api.utils.js';

const ImagesContainer = ({ id }) => {
    const [images, setImagesArray] = useState([]);
    useEffect(() => {
        async function getSimilar() {
            const data = await getSimilarMovies(id);
            setImagesArray(data)
        }
        getSimilar()
    }, [])
    console.log(images)
    return (
        <div className='images-wrapper container'>
            <div>
                <h2>More Like This</h2>
            </div>
            <div className="images-container">

                {
                    Object.keys(images).length > 0 &&
                    images.results.map((image, index) => {
                        return index < 12 && <ImageCard key={index} imageUrl={image.backdrop_path} id={image.id} />
                    })
                }
            </div>
        </div>
    )
}

export default ImagesContainer;