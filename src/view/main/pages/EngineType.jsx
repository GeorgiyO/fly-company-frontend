import React from "react";
import {Input} from "src/view/components/input";
import {Observable} from "src/domain/observable";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {EngineTypeAPI, EngineTypeTemplate} from "src/model/entities/EngineType";
import {EngineTypeJsx} from "src/view/entities/EngineType";

export function EngineType() {

    const [moder] = Observable.useWatch(session.role.moder);

    return new MenuBuilder("/engine-type").default({
        API: EngineTypeAPI,
        Template: EngineTypeTemplate,
        singleName: "Engine type",
        manyName: "Engine types",
        Inputs,
        role: moder,
        JsxConverterObject: EngineTypeJsx
    }).build();
}

function Inputs({template}) {
    return (
        <div>
            <Input type={"text"} label={"type"} valueRef={template.type}/>
        </div>
    )
}
