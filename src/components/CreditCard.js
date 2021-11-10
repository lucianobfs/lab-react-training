import visa from "../visa.png"

import mastercard from "../master-card.svg"



function CreditCard(prop) {

    let arr = [...prop.number]

    return (

    
        <div className="roundcard d-flex flex-column bd-highlight" style={{backgroundColor: prop.bgColor, color: prop.color}}>
            <div>
                <img className="cards-img" src={prop.type === "Master Card" ? mastercard : visa}/>
            </div>

            <div className="cartao">
                <p> <strong> {  arr.map((item, i) => {
                            i < 12 ? item = '*' : item = arr[i]
                                return item
             })} </strong> </p>
            </div>

            <div className="d-flex flex-row">
                <p className="ms-2"> <strong> {`Expires ${prop.expirationMonth.toString().padStart(2, '0')}/${prop.expirationYear.toString().split("").splice(2,2).join("")}`} </strong> </p> <p className="ms-2">{prop.bank}</p>
            </div>
            
            <div>
                <p className="ms-2">{prop.owner}</p>
            </div>
        </div>

    )
}

export default CreditCard
