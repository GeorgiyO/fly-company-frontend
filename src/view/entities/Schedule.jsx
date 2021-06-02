import React from "react";
import {Entry} from "src/view/components/entry";
import {PlanesJsx} from "src/view/entities/Planes";
import {AddressJsx} from "src/view/entities/Address";
import {Link} from "react-router-dom";

export const ScheduleJsx = {
    toJsx(item) {
        return (
            <div>
                {Entry.of("date", new Date(item.date).toString())}
                {Entry.of("price", item.price)}
                {Entry.of("plane", PlanesJsx.toLink(item.plane))}
                {Entry.of("from", AddressJsx.toLink(item.fromAddr))}
                {Entry.of("to", AddressJsx.toLink(item.toAddr))}
            </div>
        );
    },
    toShort(item) {
        return `${new Date(item.date)} - ${item.fromAddr.value} - ${item.toAddr.value}`;
    },
    toLink(item) {
        return (
            <div>
                <Link to={"/schedule/" + item.id}>{
                    ScheduleJsx.toShort(item)
                }</Link>
            </div>
        );
    }

}