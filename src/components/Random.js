


function Random(prop) {
    return (

        <div className="greet">
            <p>{`Random value between ${prop.min} and ${prop.max} => ${Math.floor(Math.random() * (prop.max - prop.min + 1) + prop.min)}`}</p>
        </div>
    )
}


export default Random