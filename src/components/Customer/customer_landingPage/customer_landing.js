import React from "react";
import {Link} from "react-router-dom";
const CustomerLanding=()=>{
    
    return(
    <div>
        <h2>Customer Page</h2>
    </div>
    )
}


const PostAd = () => {
    return (
    <div>
        <h1>WELCOME</h1><Link to = '/post/animal'>
     <button>Post Ad</button></Link></div>
    )
}

export default PostAd;