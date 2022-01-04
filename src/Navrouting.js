import React from "react";
import { Link } from 'react-router-dom';

function Navrouting() {
    return (
        <div>
            <Link to="/" >HOME PAGE</Link>
            <Link to="/about" >About PAGE</Link>
        </div>
    )
}

export default Navrouting;