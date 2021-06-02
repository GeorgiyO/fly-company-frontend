import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";

export const CashiersJsx = {
    toJsx(cashier) {
        return (
            <div>
                {Entry.of("id", cashier.id)}
                {Entry.of("login", cashier.login)}
                {Entry.of("password", cashier.password)}
            </div>
        );
    },
    toShort(cashier) {
        return cashier.login;
    },
    toLink(cashier) {
        return (
            <div>
                <Link to={"/cashiers/" + cashier.id}>{CashiersJsx.toShort(cashier)}</Link>
            </div>
        )
    }
}
