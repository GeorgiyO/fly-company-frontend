import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";

export const ModerJsx = {
    toJsx(item) {
        return (
            <div>
                {Entry.of("id", item.id)}
                {Entry.of("login", item.login)}
                {Entry.of("password", item.password)}
            </div>
        );
    },
    toShort(item) {
        return item.login;
    },
    toLink(item) {
        return (
            <div>
                <Link to={"/moder/" + item.id}>{ModerJsx.toShort(item)}</Link>
            </div>
        )
    }
}