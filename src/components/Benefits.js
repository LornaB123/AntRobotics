function Benefits(props) {
  const { benefits, benefitsRef } = props

  return (
    <div className="benefits" ref={benefitsRef}>
        <h2 className="benefits__title"> Benefits </h2>
        <div className="benefits__columns">
              {
                benefits.map((benefit,i) => (
                  <div key={i}>
                      <div className="benefits__image">
                          <img  src={ benefit.link } alt="img" />
                      </div>
                      <p className="benefits__column-title"> { benefit.title } </p>
                      <p className="benefits__column-subtitle"> { benefit.subtitle } </p>
                  </div>
                ))
              }
        </div>
    </div>
  );
}

export default Benefits;
