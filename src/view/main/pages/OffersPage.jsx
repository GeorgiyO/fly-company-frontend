import React from "react";
import {Observable} from "src/domain/observable";
import {useRouteMatch} from "react-router-dom";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {Add} from "src/view/components/PageTemplates/AddPageTemplate";
import {API, Template} from "src/model/entities/Offers";
import {EntitySelect} from "src/view/components/entity/entitySelect";
import {PlacesJsx} from "src/view/entities/Places";
import {API as PlacesAPI} from "src/model/entities/Places";
import {Input} from "src/view/components/input";
import {ScheduleJsx} from "src/view/entities/Schedule";
import {Page} from "src/view/components/PageTemplates/EntityPageTemplate";
import {List} from "src/view/components/PageTemplates/ListPageTemplate";
import {OffersJsx} from "src/view/entities/Offers";

export function OffersPage() {

    const [cashier] = Observable.useWatch(session.role.cashier);
    const url = useRouteMatch().url;

    return new MenuBuilder(url)
        .addLink("", "Offers list", cashier)
        .addLink("/add", "Add offer", cashier)

        .addRoute("/add",
            () => <Add API={API}
                       Template={Template}
                       url={url}
                       Inputs={Inputs}
                       label={"Offer"}
            />, cashier)

        .addRoute("/:id",
            () => <Page
                API={API}
                showDelete={cashier}
                showUpdate={false}
                toJsx={OffersJsx.toJsx}
                url={url}
            />, cashier)

        .addRoute("",
            () => <List
                supplier={API.all}
                toJsx={OffersJsx.toLink}
            />)

        .build();

}

function Inputs({template}) {
    const pass = template.passenger;
    let _i = 0;
    let i = () => _i++;
    return [
        <EntitySelect key={i()} label={"place"} toShort={PlacesJsx.toShort}
                      listRequest={PlacesAPI.free} valueRef={template.place}
        />,
        <Input key={i()} type={"text"} valueRef={pass.firstName} label={"firstName"}/>,
        <Input key={i()} type={"text"} valueRef={pass.secondName} label={"secondName"}/>,
        <Input key={i()} type={"text"} valueRef={pass.patronymic} label={"patronymic"}/>,
        <Input key={i()} type={"text"} valueRef={pass.docType} label={"docType"}/>,
        <Input key={i()} type={"text"} valueRef={pass.docNumber} label={"docNumber"}/>
    ];
}
