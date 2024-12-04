import {useState} from "react";

function ProfileCard({titulo, handle,url}){
    const[count, setCount]=useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return (
        <div className="card">
            <div>
                <img src={url} alt="logo"/>
                <h2>{titulo}</h2>
                <p>{handle}</p>
            </div>
            <div className="columns">
                <div className="column">
                    <button onClick={handleClick} className="button is-danger is-fullwidth">
                        <p>+</p>
                    </button>
                </div>
                <div className="column">
                    <span><p className="content">Likes: {count}</p></span>
                </div>
                <div className="column">
                    <button onClick={handleClick} className="button is-danger is-fullwidth">
                        <p>-</p>
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default ProfileCard;