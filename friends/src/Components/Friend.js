import React from "react";
import { useHistory,Route } from "react-router-dom";
import EditFriend from "./EditFriend"

function Friend (props) {
    const { id, name, age, email } = props.friend;
    const history = useHistory();

    const editFriend = () => {
        history.push(`/friends/${id}`, props.friend)
        console.log(id)
    }
    console.log(name)
    return (
        <div className="individual">
            <h3 className="name">{name}</h3>
            <h5 className="age">Age: {age}</h5>
            <h5 className="email">Email: {email}</h5>
            <Route exact path={`/friends/${id}`}>
            <EditFriend friend={props.friend}/>
            </Route>
            <button onClick={editFriend}>Edit Friend</button>
        </div>
    )
}
export default Friend