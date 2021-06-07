import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";

export const BodyTypeJsx = {
    toJsx(item) {
        return (
            <div>
                {Entry.of("id", item.id)}
                {Entry.of("type", item.type)}
            </div>
        )
    },
    toShort(item) {
        return item.type;
    },
    toLink(item) {
        return (
            <div>
                <Link to={"/body-type/" + item.id}>{
                    BodyTypeJsx.toShort(item)
                }</Link>
            </div>
        )
    }
}