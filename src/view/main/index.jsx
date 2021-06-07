import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import {LogoutPage} from "src/view/main/pages/LogoutPage";
import {Overview} from "src/view/main/Overview";
import {LoginPage} from "src/view/main/pages/LoginPage";
import {ModerPage} from "src/view/main/pages/ModerPage";
import {BodyType} from "src/view/main/pages/BodyType";
import {EngineType} from "src/view/main/pages/EngineType";
import {Brand} from "src/view/main/pages/Brand";
import {Country} from "src/view/main/pages/Country";
import {Specification} from "src/view/main/pages/Specification";
import {Product} from "src/view/main/pages/Product";
import {Client} from "src/view/main/pages/Client";
import {Model} from "src/view/main/pages/Model";

export function Main() {

    let i = 0;
    const routes = [<Route key={i++} exact path={"/"} render={() => <Redirect to={"/overview"}/>}/>];
    const route = (path, component) => routes.push(<Route key={i++} path={path} component={component}/>);

    route("/overview", Overview);
    route("/logout", LogoutPage);
    route("/login", LoginPage);
    route("/moder", ModerPage);
    route("/body-type", BodyType);
    route("/engine-type", EngineType);
    route("/brand", Brand);
    route("/model", Model)
    route("/country", Country);
    route("/specification", Specification);
    route("/product", Product);
    route("/client", Client);

    return (
        <div className={"main"}>
            <Switch>
                {routes}
            </Switch>
        </div>
    );
}