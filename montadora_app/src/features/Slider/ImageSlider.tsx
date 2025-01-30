import React, { useState } from 'react'

interface ImageSliderProps {
    images:string[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const length = images.length

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    } 

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    }

    if (!Array.isArray(images) || images.length === 0) {
        return null;
    }

    return (
        <section className='slider'>
            {images.map((image, index) => (
                <div key={index} className={index === currentImage ? "slideActive" : "slide"}>
                    {index === currentImage && (
                        <img src={image} alt=""  className='image'/>
                    )}
                </div>
            ))}

            <button className='left-arrow' onClick={prevSlide}>Prev</button>
            <button className='right-arrow' onClick={nextSlide}>Next</button>
        </section>
        
    )
}

export default ImageSlider
