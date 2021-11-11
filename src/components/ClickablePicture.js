import {useState} from "react";


function ClickablePicture(props) {

    let [glassesOn, setGlassesOn] = useState(true);


    function clickar(props) {
        setGlassesOn(!glassesOn)
    }

    return (
        <div>
        {glassesOn ? (
            <img onClick={clickar} className="glassesguy" src={props.img} />
            ) : (
                <img onClick={clickar} className="glassesguy" src={props.imgClicked} />
            )}
      </div>
    )

}



export default ClickablePicture

// {glassesOn ? <img src={props.img} /> : <img src={props.imgClicked} />}