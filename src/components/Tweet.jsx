import React from "react";



const Tweet = (props) => {
    function handleTweet(){
        window.open(`https://twitter.com/intent/tweet?text=${props.quotes}-${props.author}`);
    }

    return(
        <div>
            <button onClick={handleTweet}>Tweet <i className="fab fa-twitter"></i></button>
        </div>
    )
}

export default Tweet;