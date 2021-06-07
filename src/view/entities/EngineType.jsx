import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";

export const EngineTypeJsx = {
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
                <Link to={"/engine-type/" + item.id}>{
                    EngineTypeJsx.toShort(item)
                }</Link>
            </div>
        )
    }
}