
function IdCard(props) {
    return (

        <div className="teste">
            <div className="d-flex flex-row bd-highlight m-3">
        
                <div>
                    <img src={props.picture} alt="teste"/>
                </div>
    
            <div className="ms-5">
                <p className="test"><strong>First Name: </strong> {props.firstName}</p>
                <p className="test"><strong>Last Name: </strong> {props.lastName}</p>
                <p className="test"><strong>Gender: </strong> {props.gender}</p>
                <p className="test"><strong>Height: </strong> {props.height}</p>
                <p className="test"><strong>Birth: </strong> {props.birth.toLocaleString('en-us')}</p>
            </div>
            </div>
        </div>
        
    )
}


export default IdCard