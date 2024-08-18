import ProfilePicture from "../assets/boree.png"

function Card(){
    return(
        <>
        <div className="card">
            <img className="card-image" src={ProfilePicture} height="100" alt="profile picture"></img>
            <h2 className="card-title">By Bro code</h2>
            <p className="card-text">I am learning Reat Js</p>
        </div>
        </>
    );
}

export default Card;