import React from "react";
import {NavLink} from "react-router-dom";
import {Observable} from "src/domain/observable";

export function Header() {

    const [cashier] = Observable.useWatch(session.role.cashier);
    const [admin] = Observable.useWatch(session.role.admin);

    const links = [];
    let i = 0;
    const link = (to, text) => links.push(<NavLink key={i++} activeClassName={"current"} to={to}>{text}</NavLink>);

    link("/overview", "Overview");
    link("/planes", "Planes");
    link("/address", "Address");
    link("/schedule", "Schedule");
    link("/places", "Places");

    if (cashier) {
        link("/offers", "Offers");
    }

    if (admin) {
        link("/cashiers", "Cashiers");
    }

    if (cashier || admin) {
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