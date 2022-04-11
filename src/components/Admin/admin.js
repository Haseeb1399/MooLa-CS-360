import React,{useState} from "react";
import axios from "axios";
import "./admin.css"
import Popup from "reactjs-popup";

const Admin = () => {
    const [email, setEmail] = useState("");
    const [minPrice, setMinPrice] = useState(0);


    const onSubmitId = (event)=>{
        event.preventDefault()
        const newObject = {
            email : email
        }
        const url = process.env.REACT_APP_LOCAL_KEY+ "/User/ban"
        console.log(url, newObject);

        axios.post(url,newObject).then((res)=>{
            alert("Here",res);
        }
        ).catch((err)=>{
            console.log(err.message);
        })
    }

    const onSubmitPrice = (event)=>{
        event.preventDefault()
        const newObject = {
            minPrice : minPrice
        }

        
    }

    const handleEmail = (event)=>{
        setEmail(event.target.value)
    }
    const handleMinPrice = (event)=>{
        setMinPrice(event.target.value)
    }

    return (
        <div class = "App">
            <Popup trigger={<button class="button">Ban a User</button>} position="left center">
                <form id = "myForm" action = "#" method="post">
                    <div>
                        <label for = "Username">Username</label>
                        <input onChange={handleEmail} class="input User Id" placeholder="Enter User Id" type="email" name="Id" id="Id"/>

                    </div>
                </form>
                <input onClick ={onSubmitId} class ="button" type="submit" form="myform"value="Ban User"/>
            </Popup>
            <Popup trigger={<button class = "button">Edit Minimum Price</button>} position="right center">
                <form id = "myForm" action = "#" method="post">
                    <div>
                        <label for = "minimum Price">Minimum Price</label>
                        <input onChange={handleMinPrice} class="input User Id" placeholder="Enter User Id" type="number" name="Id" id="Id"/>
                    </div>
                </form>
                <input onClick ={onSubmitPrice} class ="button" type="submit" form="myform"value="Set Price"/>
            </Popup>
        </div>
    )
};

export default Admin;