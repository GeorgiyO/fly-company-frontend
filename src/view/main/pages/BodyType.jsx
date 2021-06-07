import React from "react";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {BodyTypeAPI, BodyTypeTemplate} from "src/model/entities/BodyType";
import {Observable} from "src/domain/observable";
import {BodyTypeJsx} from "src/view/entities/BodyType";
import {Input} from "src/view/components/input";

export function BodyType() {

    const [moder] = Observable.useWatch(session.role.moder);

    return new MenuBuilder("/body-type").default({
        API: BodyTypeAPI,
        Template: BodyTypeTemplate,
        singleName: "Body Type",
        manyName: "Body Types",
        Inputs,
        role: moder,
        JsxConverterObject: BodyTypeJsx
    }).build();
}

function Inputs({template}) {
    return (
        <div>
            <Input type={"text"} label={"type"} valueRef={template.type}/>
        </div>
    );
}
