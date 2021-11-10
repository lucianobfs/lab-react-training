

function DriverCard(prop) {

    let arr = ['☆','☆','☆','☆','☆']

    let starsCount = Math.round(prop.rating)

    return (
        <div className=" drivers d-flex flex-row justify-content-center">

           
                <img className="randomGuysLol" src={prop.img} alt="teste"/>
        

            <div className="d-flex flex-column ms-5 align-items-baseline">
                <h3>{prop.name}</h3>

                <p className="stars"> {arr.map((item, i) => {
                    i < starsCount ? item = '★' : item = arr[i]
                        return item
                })} </p>

                <p>{`${prop.car.model} - ${prop.car.licensePlate}`}</p>
            </div>

        </div>
    )

}


export default DriverCard