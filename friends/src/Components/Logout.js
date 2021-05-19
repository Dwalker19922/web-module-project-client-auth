import React from "react";
import { Link, useHistory } from "react-router-dom";

function Logout (props) {
    console.log(props)
 const{data} = props
    let history = useHistory();
    const logout = () => {
        localStorage.removeItem("token");
        history.push("/");
        data({
            loggedIn:false
        })
    }
    return (
        <div className="logoutDiv">
        <Link className="link" to="/" onClick={logout}>Logout</Link>
        </div>
    )
}
export default Logout