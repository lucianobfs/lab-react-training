

function Greetings(prop) {
    return (
        <div className="greet">
            <p>{prop.lang === "de" ? `Hallo ${prop.children}` : `Bonjour ${prop.children}`}</p>
        </div>
    )
}


export default Greetings