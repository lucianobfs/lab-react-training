import {useState, useEffect} from 'react'

import dice0 from "../dices/dice-empty.png"

import dice1 from "../dices/dice1.png"

import dice2 from "../dices/dice2.png"

import dice3 from "../dices/dice3.png"

import dice4 from "../dices/dice4.png"

import dice5 from "../dices/dice5.png"

import dice6 from "../dices/dice6.png"



// function Dice() {

// const [dice, setDice] = useState(diceempt);

// useEffect(() => {
//   const rowDice = Math.floor(Math.random() * (6) + 1);
//   setDice(`dice${rowDice}`);
// }, []);

// function handleDice () {
//     const rowDice = Math.floor(Math.random() * (6) + 1);
//     setDice(`dice${rowDice}`);
// }

//     return (

//         <div>

            
//             <img onClick={handleDice} src={dice} />
            

//         </div>

//     )

// }


// export default Dice


// // setDice(`"../dices/dice${rowDice}.png"`);


let diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]


let initialRandom = Math.floor(Math.random() * (6 - 1) + 1)

let image = diceArray[initialRandom]

function Dice() {


    let [dice, setDice] = useState(image)

    function handleDice() {

        let random = Math.floor(Math.random() * (6 - 1) + 1)

        image = dice0

        setDice(image)

        setTimeout(() => {
            image = diceArray[random]
            setDice(image)
        }, 1000)
    }

    return (
        <div>
            <img onClick={handleDice} src={image} className="dice"/>
        </div>
    )
}

export default Dice