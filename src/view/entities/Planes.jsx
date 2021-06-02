import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";

export const PlanesJsx = {
    toJsx(plane) {
        return (
            <div>
                {Entry.of("id", plane.id)}
                {Entry.of("description", plane.description)}
            </div>
        );
    },
    toShort(plane) {
        return plane.description;
    },
    toLink(plane, key = 0) {
        return (
            <div>
                <Link key={key} to={"/planes/" + plane.id}>{PlanesJsx.toShort(plane)}</Link>
            </div>
        );
    }
}