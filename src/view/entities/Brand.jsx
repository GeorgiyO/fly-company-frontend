import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";

export const BrandJsx = {
    toJsx(item) {
        return (
            <div>
                {Entry.of("id", item.id)}
                {Entry.of("type", item.name)}
            </div>
        )
    },
    toShort(item) {
        return item.name;
    },
    toLink(item) {
        return (
            <div>
                <Link to={"/brand/" + item.id}>{
                    BrandJsx.toShort(item)
                }</Link>
            </div>
        )
    }
}