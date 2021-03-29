function Banner(props) {
    return (
      <header className="banner" ref={props.bannerRef} >
          <div className="banner__column-1">
              <div />
              <div />
              <div />
          </div>
          <div>
              <div className="banner__cubes">
                  <h1 className="banner__title">ANT Robotics</h1>
                  <div />
              </div>
              <p className="banner__subtitle">
                  We simplify employment, team-up, and upgrade of transport robots in warehouses and factories.
              </p>
              <div className="banner__button-container">
                  <button className="banner__video-button"> Watch Video </button>
                  <button className="banner__learn-button"> Learn More </button>
              </div>
          </div>
          <div className="banner__column-3">
              <div />
              <div />
              <div />
          </div>
      </header>
    );
}

export default Banner;