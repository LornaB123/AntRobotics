import { useState, useEffect } from 'react'

function NavBar(props) {
    const { bannerRef, 
            productRef,
            benefitsRef,
            galleryRef,
            customerBenefitsRef,
            teamRef,
            contactRef} = props
    const [isOpen, setIsOpen] = useState(false)
    const [scrollY, setScrollY] = useState(null)
    const [lightNav, setLightNav] = useState('')
    const [activeLink,setActiveLink] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    useEffect(() => {
        [bannerRef, productRef, benefitsRef, galleryRef, customerBenefitsRef, teamRef, contactRef].forEach(handleStyle)
    },[scrollY])

    function handleClick() {
        setIsOpen(!isOpen)
    }

    function handleScroll() {
        setScrollY(window.scrollY)
    }
    
    function handleStyle(refComponent) {
        const top = refComponent.current?.offsetTop
        const bottom = refComponent.current?.offsetHeight + top
        
        switch (refComponent) {
            case bannerRef:
                scrollY >= refComponent.current?.offsetHeight - 60 ? setLightNav('nav_light') : setLightNav('')
                setActiveLink('')
                return;
            case productRef:
                return scrollY >= top - 60 && scrollY < bottom ? setActiveLink('product') : null
            case benefitsRef:
                return scrollY >= top - 60 && scrollY < bottom ? setActiveLink('benefits') : null
            case galleryRef:
                return scrollY >= top - 60 && scrollY < bottom ? setActiveLink('gallery') : null
            case customerBenefitsRef:
                return scrollY >= top - 60 && scrollY < bottom ? setActiveLink('customer') : null
            case teamRef:
                return scrollY >= top - 60 && scrollY < bottom ? setActiveLink('team') : null
            case contactRef:
                return scrollY >= top - 60 && scrollY < bottom ? setActiveLink('contact') : null
            default:
                return;
        }  
    }
    
    return (
        <nav className={`nav ${lightNav}`}>
            <p 
                className="nav__logo" 
                onClick={() => bannerRef.current.scrollIntoView()}>
                    ANT Robotics</p>
            <a 
                href='https://www.linkedin.com/company/antrobotics'
                target='_blank'
                className='nav__link'
                >in</a>
            <button 
                className={`nav__button ${isOpen && 'nav__button_cross'}`}
                onClick={handleClick}
            />
            <ul className={`nav__list ${isOpen && 'nav__list_open'}`}>
                <li 
                    className={`${activeLink === 'product' ? 'nav__active' : ''}`}
                    onClick={() => productRef.current.scrollIntoView()}>Robots</li>
                <li 
                    className={`${activeLink === 'benefits' ? 'nav__active' : ''}`}
                    onClick={() => benefitsRef.current.scrollIntoView()}>Benefits</li>
                <li 
                    className={`${activeLink === 'gallery' ? 'nav__active' : ''}`}
                    onClick={() => galleryRef.current.scrollIntoView()}>Gallery</li>
                <li 
                    className={`${activeLink === 'customer' ? 'nav__active' : ''}`}
                    onClick={() => customerBenefitsRef.current.scrollIntoView()}>Will it work for Me?</li>
                <li 
                    className={`${activeLink === 'team' ? 'nav__active' : ''}`}
                    onClick={() => teamRef.current.scrollIntoView()}>Team</li>
                <li 
                    className={`${activeLink === 'contact' ? 'nav__active' : ''}`}
                    onClick={() => contactRef.current.scrollIntoView()}>Contact Us</li>
            </ul>
        </nav>
    )
}

export default NavBar