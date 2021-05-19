import React, { useState,useContext } from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../utils/axiosWithAuth";


function EditFriend (props) {
   const { id,name, age, email } = props.friend
   console.log(props)
    const [state, setState] = useState({
        id: id,
        name: "",
        age: "",
        email: ""
    })

    const handleChange = e => {
        setState({...state,
            [e.target.name] : e.target.value
        
        })
    }

    const history = useHistory();

    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth().put(`/friends/${state.id}`, state)
            .then(res => {
                
            })
            .catch(err => console.log(err))
            console.log(state)
        
           return history.push("/friends"),window.location.reload()
    }

    const deleteFriend = e => {
        e.preventDefault();
        axiosWithAuth().delete(`/friends/${state.id}` )
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
            history.push("/friends");
            window.location.reload()
    }
    return (
        <div>
                <h3>{name}</h3>
                <h5>{age}</h5>
                <h5>{email}</h5>
                <label htmlFor="name">Name:
                    <input name="name" value={state.name} onChange={handleChange} />
                </label><br />
                <label htmlFor="age">Age:
                    <input name="age" value={state.age} onChange={handleChange} />
                </label><br />
                <label htmlFor="email">Email:
                    <input name="email" value={state.email} onChange={handleChange} />
                </label><br />
                <button onClick={submitForm}>Submit</button><br />
                <button onClick={deleteFriend}>Delete Friend</button>
        </div>
    )
}
export default EditFriend