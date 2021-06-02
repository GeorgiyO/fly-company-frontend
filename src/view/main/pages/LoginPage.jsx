import React from "react";
import {LoginHandler} from "src/model/LoginHandler";
import {Observable} from "src/domain/observable";
import {useHistory} from "react-router-dom";
import {handleApiError} from "src/view/components/apiErrorHandler";
import {Input} from "src/view/components/input";

export function LoginPage() {

    const login = Observable.field();
    const password = Observable.field();
    const history = useHistory();

    const action = () => {
        LoginHandler.auth(login.get(), password.get())
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                handleApiError("on login", error);
            });
    };

    return (
        <div className={"entity-form"}>
            <Input type={"text"} label={"login"} valueRef={login}/>
            <Input type={"password"} label={"password"} valueRef={password}/>
            <button onClick={action}>Log in</button>
        </div>
    );
}
