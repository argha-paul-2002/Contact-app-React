import React, {useRef} from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    // console.log(props);
    const inputEl = useRef("");

    const getSearchTerm = ()=>{
        // console.log(inputEl.current.value);
        props.searchKeyword(inputEl.current.value)
    };
return (
<div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">ContactManager</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-contact">Add Contact</Link>
                    </li>
                                        
                </ul>
                
                <div className="d-flex">
                    <input className="form-control me-2 d-flex" type="text" ref={inputEl} placeholder="Search" aria-label="Search" value={props.term} onChange={getSearchTerm}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </div>
             
            </div>
        </div>
    </nav>
</div>
)
}