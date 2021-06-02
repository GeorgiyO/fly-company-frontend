import React from "react";
import {LoginHandler} from "src/model/LoginHandler";
import {useHistory} from "react-router-dom";

export function LogoutPage() {

    const history = useHistory();

    LoginHandler.logout().then(() => {
        history.push("/");
    });

    return <div>"...logging out"</div>;
}
