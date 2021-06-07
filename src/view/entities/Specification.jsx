import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";
import {BodyTypeJsx} from "src/view/entities/BodyType";
import {EngineTypeJsx} from "src/view/entities/EngineType";

export const SpecificationJsx = {
    toJsx(item) {
        return (
            <div>
                {Entry.of("id", item.id)}
                {Entry.of("doors count", item.doorsCount)}
                {Entry.of("seats count", item.seatsCount)}
                {Entry.of("engine working volume", item.engineWorkingVolume)}
                {Entry.of("engine position", item.enginePos)}
                {Entry.of("body type", BodyTypeJsx.toLink(item.bodyType))}
                {Entry.of("engine type", EngineTypeJsx.toLink(item.engineType))}
            </div>
        )
    },
    toShort(item) {
        return [item.id, item.doorsCount, item.seatsCount, item.engineWorkingVolume, item.bodyType.type, item.engineType.type].join(" - ");
    },
    toLink(item) {
        return (
            <div>
                <Link to={"/specification/" + item.id}>{
                    SpecificationJsx.toShort(item)
                }</Link>
            </div>
        )
    }
}