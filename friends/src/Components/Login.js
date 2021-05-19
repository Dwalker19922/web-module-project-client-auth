import React, {useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute"

const initialState = {
    loggedIn:false,
    isLoading: false,
    credentials:{
    username: 'Lambda School',
    password: 'i<3Lambd4' }
}

function Login (props) {
    console.log(props)
    const [state, setState] = useState(initialState);

    const history = useHistory()

    const handleChange = e => {
        setState({...state, [e.target.name] : e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", state.credentials)
            .then(res => {
                console.log(res.data.payload)
                localStorage.setItem("token", res.data.payload);
                history.push("./friends");
            })
            .catch(err => console.log(err))
                props.state({logedIn:true})
    }
    console.log(state)
    return (
        <div>
            <form onSubmit={submitForm}>
                <h2>Login</h2>
                <label htmlFor="username">Username
                    <input name="username" value={state.credentials.username} onChange={handleChange} /><br />
                </label>
                <label htmlFor="password">Password
                    <input name="password" type="password" value={state.credentials.password} onChange={handleChange} /><br />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login