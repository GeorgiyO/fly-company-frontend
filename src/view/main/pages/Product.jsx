import React from "react";
import {Checkbox, Input} from "src/view/components/input";
import {EntitySelect} from "src/view/components/entity/EntitySelect";
import {CountryAPI} from "src/model/entities/Country";
import {CountryJsx} from "src/view/entities/Country";
import {BrandAPI} from "src/model/entities/Brand";
import {BrandJsx} from "src/view/entities/Brand";
import {SpecificationAPI} from "src/model/entities/Specification";
import {SpecificationJsx} from "src/view/entities/Specification";
import {Observable} from "src/domain/observable";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {ProductAPI, ProductTemplate} from "src/model/entities/Product";
import {ProductJsx} from "src/view/entities/Product";
import {ModelAPI} from "src/model/entities/Model";
import {ModelJsx} from "src/view/entities/Model";

export function Product() {

    const [moder] = Observable.useWatch(session.role.moder);

    return new MenuBuilder("/product").default({
        API: ProductAPI,
        Template: ProductTemplate,
        singleName: "Product",
        manyName: "Products",
        Inputs,
        role: moder,
        JsxConverterObject: ProductJsx,
        toId: (_) => _.code
    }).build();
}

function Inputs({template}) {
    return (
        <div>
            <Checkbox label={"available"} valueRef={template.available}/>
            <Input type={"date"} label={"availability date"} valueRef={template.availabilityDate}/>
            <Input type={"number"} label={"price"} valueRef={template.price}/>
            <EntitySelect listRequest={ModelAPI.all} toShort={ModelJsx.toShort}
                          label={"model"} valueRef={template.model}
            />
            <EntitySelect listRequest={CountryAPI.all} toShort={CountryJsx.toShort}
                          label={"country"} valueRef={template.country}
            />
            <EntitySelect listRequest={BrandAPI.all} toShort={BrandJsx.toShort}
                          label={"brand"} valueRef={template.brand}
            />
            <EntitySelect listRequest={SpecificationAPI.all} toShort={SpecificationJsx.toShort}
                          label={"specification"} valueRef={template.specification}
            />
        </div>
    )
}
