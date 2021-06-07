import React from "react";
import {Input} from "src/view/components/input";
import {Observable} from "src/domain/observable";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {ModelAPI, ModelTemplate} from "src/model/entities/Model";
import {ModelJsx} from "src/view/entities/Model";

export function Model() {

    const [moder] = Observable.useWatch(session.role.moder);

    return new MenuBuilder("/model").default({
        API: ModelAPI,
        Template: ModelTemplate,
        singleName: "Model",
        manyName: "Models",
        Inputs,
        role: moder,
        JsxConverterObject: ModelJsx
    }).build();
}

function Inputs({template}) {
    return (
        <div>
            <Input type={"text"} label={"name"} valueRef={template.name}/>
        </div>
    )
}
