import {useState} from "react";


function Carousel(props) {


    let arr = [...props.imgs]



    let [image, setImage] = useState(arr[0])

    let [soma, setSoma] = useState(1)

    let [sub, setSub] = useState(1)






    const nextImage = (props) => {

        if (soma % 4 !== 0) {
            setSoma(soma + 1)
            setImage(arr[soma % 4])
            console.log(soma)
        }
        // setSoma(soma + 1)
        // setImage(arr[soma])
        // console.log(soma)
        else if (soma % 4 === 0) {
            setSoma(soma + 1)
            setImage(arr[0])
            console.log(soma)
        }
    }
        
    


    function prevImage(props) {
        if (soma % 4 !== 0) {
            setSoma(soma - 1)
            setImage(arr[soma % 4])
            console.log(soma)
        }
        // setSoma(soma + 1)
        // setImage(arr[soma])
        // console.log(soma)
        else if (soma % 4 === 0) {
            setSoma(soma - 1)
            setImage(arr[0])
            console.log(soma)
        }
    }


    return (
        
        <div className="d-flex flex-row">

            <button onClick={prevImage} >Left</button>

            <img src={image}/> 

            
            <button onClick={nextImage} >Right</button>
            

        </div>
    )

}



export default Carousel