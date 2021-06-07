import React from "react";
import {NavLink} from "react-router-dom";
import {Observable} from "src/domain/observable";

export function Header() {

    const [moder] = Observable.useWatch(session.role.moder);
    const [admin] = Observable.useWatch(session.role.admin);

    const links = [];
    let i = 0;
    const link = (to, text) => links.push(<NavLink key={i++} activeClassName={"current"} to={to}>{text}</NavLink>);

    link("/overview", "Overview");
    link("/body-type", "Body Type");
    link("/engine-type", "Engine Type");
    link("/brand", "Brand");
    link("/model", "Model");
    link("/country", "Country");
    link("/specification", "Specification");
    link("/product", "Product");
    link("/client", "Client");

    if (admin) {
        link("/moder", "Moder");
    }

    if (moder || admin) {
        link("/logout", "Log out");
    } else {
        link("/login", "Log in");
    }

    return (
        <div className={"header"}>
            {links}
        </div>
    );
}