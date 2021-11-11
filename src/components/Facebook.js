import {useState} from "react";

import profiles from '../data/berlin.json';

let faceArr = [...profiles]

console.log(faceArr)

let countriesArr = []
faceArr.map((item) => {
    countriesArr.push(item.country)
    return countriesArr
})

console.log(countriesArr)

let uniqueCountries = countriesArr.filter((item, pos) => {
    return countriesArr.indexOf(item) === pos
})

console.log(uniqueCountries)
    

// console.log(countriesArr)



// console.log(countriesArr.length)

function FaceBook() {

    let [color, setColor] = useState()

    function changeColor(event) {
        setColor('blue')
        // event.target.value
    }


    return (
        
        <div>

            <div>
                {uniqueCountries.map((item) => {
                    return <button onClick={changeColor} >{item}</button>
                })}
            </div>

            <div className="teste">
                {faceArr.map((item) => {
                    return  <div className="d-flex flex-row bd-highlight m-3 facetest" style={{backgroundColor: color}}>
            
                                
                                <img src={item.img} className="face-imgs" alt="teste"/>
                                

                                <div className="ms-5">
                                    <p className="test"><strong>First Name: </strong> {item.firstName}</p>
                                    <p className="test"><strong>Last Name: </strong> {item.lastName}</p>
                                    <p className="test"><strong>Country: </strong> {item.country}</p>
                                    <p className="test"><strong>Type: </strong> {item.isStudent ? `Student` : `Teacher`}</p>
                                </div>
                            </div>
                    })}
                </div>
        </div>
    )
}


export default FaceBook




{/* <div className="d-flex flex-row bd-highlight m-3">
        
<div>
    <img src='' alt="teste"/>
</div>

<div className="ms-5">
<p className="test"><strong>First Name: </strong> </p>
<p className="test"><strong>Last Name: </strong> </p>
<p className="test"><strong>Gender: </strong> </p>
<p className="test"><strong>Height: </strong></p>
<p className="test"><strong>Birth: </strong> </p>
</div>
</div> */}