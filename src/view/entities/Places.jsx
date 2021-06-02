import React from "react";
import {Entry} from "src/view/components/entry";
import {ScheduleJsx} from "src/view/entities/Schedule";
import {Link} from "react-router-dom";

export const PlacesJsx = {
    toJsx(place) {
        return (
            <div>
                {Entry.of("id", place.id)}
                {Entry.of("total places", place.total)}
                {Entry.of("free places", place.free)}
                {Entry.of("schedule", ScheduleJsx.toJsx(place.scheduleItem))}
            </div>
        );
    },
    toShort(place) {
        return ScheduleJsx.toShort(place.scheduleItem) + " - free: " + place.free
    },
    toLink(place) {
        return (
            <div>
                <Link to={"/places/" + place.id}>{PlacesJsx.toShort(place)}</Link>
            </div>
        )
    }
}

