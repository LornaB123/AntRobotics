import { useState, useEffect } from 'react'


function Product(props) {
    const { products } = props
    const [product,setProduct] = useState(null)
    const [order,setOrder] = useState('first')
    const [touchStart,setTouchStart] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        setProduct(products[0])
    },[products])

    function handleNext() {
        setLoading(true)
        const index = products.indexOf(product)+1;
        index === products.length-1 ? setOrder('last') : setOrder('mid')
        setProduct(products[index])
    }
    function handlePrev() {
        setLoading(true)
        const index = products.indexOf(product)-1;
        index === 0 ? setOrder('first') : setOrder('mid')
        setProduct(products[index])
    }

    function handleTouchStart(e) {
        setTouchStart(e.touches[0].clientX)
    }
    function handleTouchEnd(e) {
        if(e.changedTouches[0].clientX - touchStart > 70 && order !== 'last')  handleNext();
        if(e.changedTouches[0].clientX - touchStart < -70 && order !== 'first')  handlePrev();
    }

    return (
        <div className="robot" ref={props.productRef}>
            <div className="robot__container">
                <div 
                    className="robot__container-image" 
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    >
                       {loading && <div className="robot__image robot__image-spinner" />}
                        <img 
                            className={`robot__image ${loading && 'robot__image_hidden'}`}
                            src={product?.link} alt="product image"
                            onLoad={() => setLoading(false)}
                        /> 
                    <div className="robot__wrapper-info">
                        <h2>{product?.name}</h2>
                        <p><span>Max payload: </span>{product?.info.payload}</p>
                        <p><span>Size: </span>{product?.info.size}</p>
                        <p><span>Max speed: </span>{product?.info.speed}</p>
                        <p><span>Running time: </span>{product?.info.runningTime}</p>
                        <p><span>Charging time: </span>{product?.info.chargingTime}</p>
                        <button 
                            onClick={props.toggle}
                            >Get more info</button>
                    </div>
                    <button 
                        className="arrow robot__button robot__button_next"
                        onClick={handleNext}
                        disabled={order === 'last'}
                        />
                    <button 
                        className="arrow robot__button"
                        onClick={handlePrev}
                        disabled={order === 'first'}
                        />
                </div>
                <div className="robot__container-description">
                    <h2>Wide choice of transport robots</h2>
                    <p>Few words about robots. Lorem ipsum, abra-kadabra, bla-bla-bla, information about robots here.</p>
                    <p>Some facts here & below</p>
                    <p>Flexible</p>
                    <p>Customizable</p>
                </div>
            </div>
        </div>
    )
}

export default Product