import React from 'react'
import user from "../images/user.png"
import { Link, useLocation  } from 'react-router-dom';
import { useState } from "react";


export default function ContactDetail(props) {
    const location = useLocation();

    //local -- to access fetched Data from another
    const [value, setValue] = useState({id:'',name:'',email:''})

    //Fetch all the data
    React.useEffect(() => {
        // console.log(location.state.data);
        const propsData = location.state;
        if(location.state){
            let _state = location.state.data
            //Set fetch data to local constant
            setValue(_state)
        }
        
    }, [location])
    
  return (
    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={user} alt="User" />
            </div>
            <div className="content">
                <div className="header">{value.name}</div>
                <div className="description">{value.email}</div>
            </div>
        </div>
    </div>
  );
}
