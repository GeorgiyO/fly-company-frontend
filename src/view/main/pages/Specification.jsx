import React from "react";
import {Input} from "src/view/components/input";
import {EntitySelect} from "src/view/components/entity/EntitySelect";
import {BodyTypeAPI} from "src/model/entities/BodyType";
import {BodyTypeJsx} from "src/view/entities/BodyType";
import {EngineTypeAPI} from "src/model/entities/EngineType";
import {EngineTypeJsx} from "src/view/entities/EngineType";
import {Observable} from "src/domain/observable";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {SpecificationAPI, SpecificationTemplate} from "src/model/entities/Specification";
import {SpecificationJsx} from "src/view/entities/Specification";

export function Specification() {

    const [moder] = Observable.useWatch(session.role.moder);

    return new MenuBuilder("/specification").default({
        API: SpecificationAPI,
        Template: SpecificationTemplate,
        singleName: "Specification",
        manyName: "Specifications",
        Inputs,
        role: moder,
        JsxConverterObject: SpecificationJsx
    }).build();
}

function Inputs({template}) {
    return (
        <div>
            <Input type={"number"} label={"doors count"} valueRef={template.doorsCount}/>
            <Input type={"number"} label={"seats count"} valueRef={template.seatsCount}/>
            <Input type={"number"} label={"engine working volume"} valueRef={template.engineWorkingVolume}/>
            <Input type={"text"} label={"engine position"} valueRef={template.enginePos}/>
            <EntitySelect listRequest={BodyTypeAPI.all} toShort={BodyTypeJsx.toShort}
                          label={"body type"} valueRef={template.bodyType}
            />
            <EntitySelect listRequest={EngineTypeAPI.all} toShort={EngineTypeJsx.toShort}
                          label={"engine type"} valueRef={template.engineType}
            />
        </div>
    );
}
