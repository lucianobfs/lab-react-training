import {useState} from "react";



function NumbersTable(props) {

    let arr = []

    for (let i = 1; i <= props.limit; i++) {
        arr.push(i)
    }


    return (

        <div>
            {arr.map((item) => {
                return item % 2 === 0 ? <div className="red-div box"> <span>{item}</span> </div> : <div className="white-div box"> <span>{item}</span> </div>
            })}
        </div>
    )
}

export default NumbersTable

