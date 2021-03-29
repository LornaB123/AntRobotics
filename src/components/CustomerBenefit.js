function CustomerBenefit(props) {
    const { customerBenefits, customerBenefitsRef } = props

    function createMarkup(markup) {
        return {__html: markup};
      }

    return (
        <div className="customer" ref={customerBenefitsRef}>
            <h2>Customers benefit despite of the automation level</h2>
            <div className="customer__grid">
                {
                    customerBenefits.map((benefit, i) => (
                        <div className="customer__card" key={i}>
                            <img src={ benefit.link } alt={benefit.title}/>
                            <p className="customer__title">{ benefit.title }</p>
                            <p className="customer__subtitle" dangerouslySetInnerHTML={createMarkup(benefit.subtitle)} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomerBenefit