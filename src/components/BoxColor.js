

function BoxColor(prop) {
    return (

        <div className="colors w-100 h-100 d-flex justify-content-center align-itens-center" style={{backgroundColor: `rgb(${prop.r}, ${prop.g}, ${prop.b})`}}>
            <p className="">{`color rgb(${prop.r}, ${prop.g}, ${prop.b})`}</p>
        </div>

    )
}



export default BoxColor