function Contacts(props) {
    return (      
        <div className="contacts" ref={props.contactRef}>
            <div className="contacts__container">
                <div>
                    <h2 className="contacts__title">Contacts</h2>
                    <p className="contacts__text">
                        Address: <span className="contacts__text-reg">8000 Edgewater Dr., Oakland, CA 94621, USA</span>
                    </p>
                    <p className="contacts__text">
                        Phone: <span className="contacts__text-reg">+1 (650) 209-0-269</span>
                    </p>
                    <p className="contacts__text">
                        Email: <a href="mailto:info@antrobotics.tech" className="contacts__text-reg">info@antrobotics.tech</a>
                    </p>
                    <a 
                        href="https://www.linkedin.com/company/antrobotics" 
                        className="contacts__linkedin"
                        target="_blank"
                        >Linkedin</a>   
                    <p className="contacts__copyright">© ANT Robotics, 2020.</p>                          
                </div>                
                <iframe className="contacts__map-iframe" title="AntRobotics" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.106697228476!2d-122.20330978440808!3d37.74064102189519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f85bee5c2f57b%3A0x115b0ab943d303e6!2s8000%20Edgewater%20Dr%2C%20Oakland%2C%20CA%2094621!5e0!3m2!1sen!2sus!4v1615921701664!5m2!1sen!2sus" 
                frameBorder="0" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>         
    );

  }
  
  export default Contacts;

  {/* This is lorna's section
             <footer className="contacts">
            <div className="contacts__wrapper">
            <h2 className="contacts__title">Contacts</h2>
            <ul className="contacts__list">
                <li className="contacts__list_item"><span>Address:</span> 8000 Edgewater Dr., Oakland, CA 94621, USA</li>
                <li className="contacts__list_item"><span>Phone:</span> +1 (650) 209-0-269</li>
                <li className="contacts__list_item"><span>Email:</span> info@antrobotics.tech</li>
                <li className="contacts__list_item"><a href="https://www.linkedin.com/company/antrobotics" className="contacts__linkedInLink"><span>LinkedIn</span></a></li>
            </ul>  
            </div>
            <div className="contacts__map">
                <iframe title="AntRobotics" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.106697228476!2d-122.20330978440808!3d37.74064102189519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f85bee5c2f57b%3A0x115b0ab943d303e6!2s8000%20Edgewater%20Dr%2C%20Oakland%2C%20CA%2094621!5e0!3m2!1sen!2sus!4v1615921701664!5m2!1sen!2sus" 
                width="600" height="450" frameBorder="0" allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="contacts__copyright">&#169; ANT Robotics, 2020.</div>
        </footer> */}       