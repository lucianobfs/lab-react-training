

function Rating(prop) {

    let arr = ['☆','☆','☆','☆','☆']

    let starsCount = Math.round(prop.children)

    return (

        <div>
            <p className="stars"> {arr.map((item, i) => {
                i < starsCount ? item = '★' : item = arr[i]
                    return item
            })} </p>
        </div>
    )
}


export default Rating