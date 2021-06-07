import React from "react";
import {Observable} from "src/domain/observable";
import {Input} from "src/view/components/input";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {BrandAPI, BrandTemplate} from "src/model/entities/Brand";
import {BrandJsx} from "src/view/entities/Brand";

export function Brand() {

    const [moder] = Observable.useWatch(session.role.moder);

    return new MenuBuilder("/brand").default({
        API: BrandAPI,
        Template: BrandTemplate,
        singleName: "Brand",
        manyName: "Brands",
        Inputs,
        role: moder,
        JsxConverterObject: BrandJsx
    }).build();
}

function Inputs({template}) {
    return (
        <div>
            <Input type={"text"} label={"name"} valueRef={template.name}/>
        </div>
    )
}