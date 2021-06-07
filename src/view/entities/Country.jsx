import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";

export const CountryJsx = {
    toJsx(item) {
        return (
            <div>
                {Entry.of("id", item.id)}
                {Entry.of("name", item.name)}
            </div>
        )
    },
    toShort(item) {
        return item.name;
    },
    toLink(item) {
        return (
            <div>
                <Link to={"/country/" + item.id}>{
                    CountryJsx.toShort(item)
                }</Link>
            </div>
        )
    }
}