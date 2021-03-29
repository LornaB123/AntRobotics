function Team(props) {
    const { team, teamRef } = props

    return (
        <div className="team" ref={teamRef}>
            <h2>Team</h2>
            <div className="team__grid">
                {
                    team.map((t,i) => (
                        <div className="team__card" key={i}>
                            <div className="team__image">
                                <img src={ t.link } alt="member image"/>
                            </div>
                            <div className="team__body">
                                <p className="team__title">{ t.title }</p>
                                <p className="team__subtitle">{ t.subtitle }</p>
                                <p className="team__text">{ t.text }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team