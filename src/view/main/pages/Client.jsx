import React from "react";
import {Observable} from "src/domain/observable";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {Checkbox, Input} from "src/view/components/input";
import {EntitySelect} from "src/view/components/entity/EntitySelect";
import {PaymentTypeAPI} from "src/model/entities/PaymentType";
import {PaymentTypeJsx} from "src/view/entities/PaymentType";
import {ProductAPI} from "src/model/entities/Product";
import {ProductJsx} from "src/view/entities/Product";
import {ClientAPI, ClientTemplate} from "src/model/entities/Client";
import {ClientJsx} from "src/view/entities/Client";

export function Client() {

    const [moder] = Observable.useWatch(session.role.moder);

    return new MenuBuilder("/client").default({
        API: ClientAPI,
        Template: ClientTemplate,
        singleName: "Client",
        manyName: "Clients",
        Inputs,
        role: moder,
        JsxConverterObject: ClientJsx,
        toId: (_) => _.passportNumber
    }).build();
}

function Inputs({template}) {
    return (
        <div>
            <Input type={"text"} label={"passport number"} valueRef={template.passportNumber}/>
            <Input type={"text"} label={"name"} valueRef={template.name}/>
            <Input type={"text"} label={"phone"} valueRef={template.phone}/>
            <Input type={"text"} label={"address"} valueRef={template.address}/>
            <Checkbox label={"delivery"} valueRef={template.delivery}/>
            <Checkbox label={"credit"} valueRef={template.credit}/>
            <EntitySelect listRequest={PaymentTypeAPI.all} toShort={PaymentTypeJsx.toShort}
                          label={"payment type"} valueRef={template.paymentType}
            />
            <EntitySelect listRequest={ProductAPI.all} toShort={ProductJsx.toShort}
                          label={"product"} valueRef={template.product}
            />
        </div>
    );
}