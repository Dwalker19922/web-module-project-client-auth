import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Friends from './Components/Friends';
import PrivateRoute from './Components/PrivateRoute';
import NewFriendForm from './Components/NewFriendForm';
import Logout from './Components/Logout';
import EditFriend from "./Components/EditFriend";
import Header from "./Components/Header.js";
import React,{useState,useContext} from "react";

function App() {
  const [loggedIn,setLoggedIn]=useState({loggedIn:false})
  const [idx,setId] = useState(1)
  console.log(idx)
  console.log(loggedIn)
  return (
    <div className="App">
      <header className="App-header">
      <Header loggedIn={loggedIn}/>
        <Switch>
            <Route path="/login">
              <Login state={setLoggedIn}/>
            </Route>
            <PrivateRoute path="/friends" component={Friends}   />
            <PrivateRoute path="/newFriend" component={NewFriendForm}  />
            <PrivateRoute path="/logout" component={Logout} data={setLoggedIn} />
            
        </Switch>
        
      </header>
    </div>
  );
}

export default App;