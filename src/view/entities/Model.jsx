import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";

export const ModelJsx = {
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
                <Link to={"/model/" + item.id}>{
                    ModelJsx.toShort(item)
                }</Link>
            </div>
        )
    }
}