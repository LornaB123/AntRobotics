function Callout(props) {
    return (
        <div className="callout">
            <div>
                <h2>Want to work with Us?</h2>
                <button onClick={props.toggle}>Click here!</button>
            </div>
        </div>
    )
}

export default Callout