import { useState, useEffect, Fragment } from 'react'

function Gallery(props) {
    const { pictures, galleryRef } = props
    const [photo, setPhoto] = useState(null)
    const [order,setOrder] = useState('first')
    const [touchStart,setTouchStart] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        setPhoto(pictures[0])
    },[pictures])

    function handlePrev() {
        setLoading(true);
        const index = pictures.indexOf(photo)-1;
        !index ? setOrder('first') : setOrder('mid');
        setPhoto(pictures[index])
    }
    function handleNext() {
        setLoading(true);
        const index = pictures.indexOf(photo)+1;
        index === pictures.length-1 ? setOrder('last') : setOrder('mid')
        setPhoto(pictures[index])
    }

    function handleTouchStart(e) {
        setTouchStart(e.touches[0].clientX)
    }
    function handleTouchEnd(e) {
        if(e.changedTouches[0].clientX - touchStart > 70 && order !== 'last')  handleNext();
        if(e.changedTouches[0].clientX - touchStart < -70 && order !== 'first')  handlePrev();
    }

    return (
        <div className="gallery" ref={galleryRef}>
            <h2>Gallery</h2>
            <div className="gallery__container">
                {loading && <div className="spinner" />}
                <img 
                    src={photo?.link} 
                    alt={photo?.name}
                    onLoad={() => setLoading(false)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    />
                <button 
                    className="arrow arrow_bg-white"
                    onClick={handlePrev}
                    disabled={order === 'first'}
                    />
                <button  
                    className="arrow arrow_bg-white gallery__btn-next" 
                    onClick={handleNext}
                    disabled={order === 'last'}
                    />                
            </div>
            <p>{photo?.name}</p>
        </div>
    )
}

export default Gallery