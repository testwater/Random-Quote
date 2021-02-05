import React, { useState,useEffect } from "react";
import Tweet from "./Tweet";
import Loader from "./Loader";

let API = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";



// CREATING AN EMPTY ARRAY TO HOLD THE DATA FROM THE API
let tempArray = [];

const RQG = () => {
    // DEFINING THE STATES
    const [quotes,setQuotes] = useState("");
    const [author,setAuthor] = useState("");

    async function quoteGen(){
        const response = await fetch(API);
        const data = await response.json();

        // console.log(data);
        let randomNumber = Math.floor(Math.random() * data.quotes.length)

        // SETTING THE DATA GOTTEN FROM THE API TO OUR ARRAY,THIS MAKES IT EASIER TO FETCH THEM WITHOTU SKIPPING. FOUND OUT THIS IS NOT NECESSARY AND IT WAS JUST TEH BEHAVIOUR OF OUR LOCAL ENVIRONMENT
        tempArray = data;
        
        // console.log(tempArray);
        setQuotes(tempArray.quotes[randomNumber].quote);
        setAuthor(tempArray.quotes[randomNumber].author);
        
    }

    // USEEFFECT HOOK TO RENDER OUR FUNCTION ONCE
    useEffect(() => {  
        setInterval(quoteGen, 10000);
        quoteGen();
    },[]) 

    return(
        <section>
            {/* THE QUOTE CONTAINER */}
            <div id="quote-container">                
                <div className="quotes">
                    {/* THIS DISPLAYS THE LOADER COMPONENT IF THERE IS NO TEXT OR QUOTE DISPLAYING */}
                {quotes.length <= 0 ? <Loader /> : ""}
                {/* SETTING CLASSNAME TO A SMALL CLASS WITH SMALL FONT SIZE IF THE QUOTE IS LONGER */}
                <p className={quotes.length > 200 ? "small" : ""}>{quotes}</p>  {/* DISPLAYS QUOTES */}
                    <p className="author">{author}</p> {/* DISPLAYS AUTHOR */}                
                </div>
                {/* THE TWEET BUTTON */}
                <Tweet quotes={quotes} author={author} />
            </div>

        </section>)
}

export default RQG;