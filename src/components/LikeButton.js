import {useState} from "react";

function LikeButton() {

    let arr = ['purple','blue','green','yellow','orange','red']

    let i = 0

    let [clickCount, setClickCount] = useState(0);

    function increment() {
        setClickCount(clickCount + 1)
    }

    return (

        <div>

           <button className="likebtn" onClick={increment}>{`${clickCount} Likes`}</button>

        </div>
    )
}



export default LikeButton