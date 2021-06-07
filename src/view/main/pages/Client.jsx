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
import {useHistory, useParams} from "react-router-dom";
import {BrandAPI} from "src/model/entities/Brand";
import {BrandJsx} from "src/view/entities/Brand";
import {List} from "src/view/components/PageTemplates/ListPageTemplate";

export function Client() {

    const [moder] = Observable.useWatch(session.role.moder);

    return new MenuBuilder("/client")
        .addRoute("/search/payment-type/:paymentTypeId", PaymentTypeSearchResult)
        .addRoute("/search/payment-type", PaymentTypeSearchPanel)
        .addRoute("/search/brand/:brandId", BrandSearchResult)
        .addRoute("/search/brand", BrandSearchPanel)
        .default({
            API: ClientAPI,
            Template: ClientTemplate,
            singleName: "Client",
            manyName: "Clients",
            Inputs,
            role: moder,
            JsxConverterObject: ClientJsx,
            toId: (_) => _.passportNumber
        })
        .addLink("/search/brand", "Search by brand")
        .addLink("/search/payment-type", "Search by payment type")
        .build();
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

function BrandSearchPanel() {

    const brand = Observable.field();
    const history = useHistory();
    const searchAction = () => {
        history.push(`/client/search/brand/${brand.get().id}`);
    }

    return (
        <div className={"entity-form"}>
            <h2>Search clients:</h2>
            <EntitySelect listRequest={BrandAPI.all} toShort={BrandJsx.toShort}
                          label={"brand"} valueRef={brand}
            />
            <button onClick={searchAction}>Search</button>
        </div>
    )
}

function BrandSearchResult() {

    const {brandId} = useParams();

    return <List supplier={() => ClientAPI.searchByBrand(brandId)}
                 toJsx={ClientJsx.toLink}
    />
}

function PaymentTypeSearchPanel() {

    const paymentType = Observable.field();
    const history = useHistory();
    const searchAction = () => {
        history.push(`/client/search/payment-type/${paymentType.get().id}`);
    }

    return (
        <div className={"entity-form"}>
            <h2>Search clients</h2>
            <EntitySelect listRequest={PaymentTypeAPI.all} toShort={PaymentTypeJsx.toShort}
                          label={"payment type"} valueRef={paymentType}
            />
            <button onClick={searchAction}>Search</button>
        </div>
    )
}

function PaymentTypeSearchResult() {

    const {paymentTypeId} = useParams();

    return <List supplier={() => ClientAPI.searchByPaymentType(paymentTypeId)}
                 toJsx={ClientJsx.toLink}
    />
}