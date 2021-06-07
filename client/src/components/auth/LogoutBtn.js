import React, { useContext } from 'react'
import axios from "axios";
import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router';
import {Button} from "react-bootstrap";
export default function LogoutBtn() {
    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();
    async function logOut(){
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        history.push("/");
    }
    return (
        <Button variant="link" onClick = {logOut}>
            Log out
        </Button>
    );
}
