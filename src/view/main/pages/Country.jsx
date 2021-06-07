import React from "react";
import {Input} from "src/view/components/input";
import {Observable} from "src/domain/observable";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {CountryAPI, CountryTemplate} from "src/model/entities/Country";
import {CountryJsx} from "src/view/entities/Country";

export function Country() {

    const [moder] = Observable.useWatch(session.role.moder);

    return new MenuBuilder("/country").default({
        API: CountryAPI,
        Template: CountryTemplate,
        singleName: "Country",
        manyName: "Countries",
        Inputs,
        role: moder,
        JsxConverterObject: CountryJsx
    }).build();
}

function Inputs({template}) {
    return (
        <div>
            <Input type={"text"} label={"name"} valueRef={template.name}/>
        </div>
    )
}
