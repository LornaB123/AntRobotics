function Popup(props) {
    const { isOpen, toggle } = props

    return (
        <div 
            className={`popup ${isOpen && 'popup_visible'}`}
            onClick={e => e.target === e.currentTarget && toggle()}
            >
            <form action="">
                <h2>Write us</h2>
                <label>Name
                    <input type="text" name="name" required/>
                </label>
                <label>Email*
                    <input type="email" name="email" required/>
                </label>
                <label>Message
                    <textarea name="message" required></textarea>
                </label>
                <button className="popup__submit" type="submit">Submit</button>
                <button className="popup__close" type="button" onClick={toggle} />
            </form>
        </div>
    )
    
}

export default Popup