import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import {LogoutPage} from "src/view/main/pages/LogoutPage";
import {Overview} from "src/view/main/Overview";
import {LoginPage} from "src/view/main/pages/LoginPage";
import {PlanesPage} from "src/view/main/pages/PlanesPage";
import {AddressPage} from "src/view/main/pages/AddressPage";
import {SchedulePage} from "src/view/main/pages/SchedulePage";
import {PlacesPage} from "src/view/main/pages/PlacesPage";
import {OffersPage} from "src/view/main/pages/OffersPage";
import {CashiersPage} from "src/view/main/pages/CashiersPage";

export function Main() {

    let i = 0;
    const routes = [<Route key={i++} exact path={"/"} render={() => <Redirect to={"/overview"}/>}/>];
    const route = (path, component) => routes.push(<Route key={i++} path={path} component={component}/>);

    route("/overview", Overview);
    route("/logout", LogoutPage);
    route("/login", LoginPage);
    route("/planes", PlanesPage);
    route("/address", AddressPage);
    route("/schedule", SchedulePage);
    route("/places", PlacesPage);
    route("/offers", OffersPage);
    route("/cashiers", CashiersPage);

    return (
        <div className={"main"}>
            <Switch>
                {routes}
            </Switch>
        </div>
    );
}