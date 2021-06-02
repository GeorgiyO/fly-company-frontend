import React from "react";
import {Observable} from "src/domain/observable";
import {useRouteMatch} from "react-router-dom";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {Add} from "src/view/components/PageTemplates/AddPageTemplate";
import {API, Template} from "src/model/entities/Schedule";
import {API as PlaneAPI} from "/src/model/entities/Planes";
import {API as AddressAPI} from "/src/model/entities/Address";
import {Input} from "src/view/components/input";
import {EntitySelect} from "src/view/components/entity/entitySelect";
import {PlanesJsx} from "src/view/entities/Planes";
import {AddressJsx} from "src/view/entities/Address";
import {Update} from "src/view/components/PageTemplates/UpdatePageTemplate";
import {Page} from "src/view/components/PageTemplates/EntityPageTemplate";
import {ScheduleJsx} from "src/view/entities/Schedule";
import {List} from "src/view/components/PageTemplates/ListPageTemplate";

export function SchedulePage() {

    const [cashier] = Observable.useWatch(session.role.cashier);
    const url = useRouteMatch().url;

    return new MenuBuilder(url)
        .addLink("", "Schedule items")
        .addLink("/add",  "Add item", cashier)

        .addRoute("/add",
            () => <Add
                API={API}
                Template={Template}
                url={url}
                Inputs={Inputs}
                label={"Schedule item"}
            />, cashier)

        .addRoute("/update/:id",
            () => <Update
                API={API}
                Template={Template}
                url={url}
                Inputs={Inputs}
                label={"Schedule item"}
            />, cashier)

        .addRoute("/:id",
            () => <Page
                API={API}
                showDelete={cashier}
                showUpdate={cashier}
                toJsx={ScheduleJsx.toJsx}
                url={url}
            />)

        .addRoute("",
            () => <List
                supplier={API.all}
                toJsx={ScheduleJsx.toLink}
            />)

        .build();
}

function Inputs({template}) {
    let _i = 0;
    let i = () => _i++;
    return [
        <Input key={i()} type={"date"} valueRef={template.date} label={"date"}/>,

        <Input key={i()} type={"number"} valueRef={template.price} label={"price"}/>,

        <EntitySelect key={i()} label={"plane"} valueRef={template.plane}
                      listRequest={PlaneAPI.all} toShort={PlanesJsx.toShort}
        />,

        <EntitySelect key={i()} label={"from"} valueRef={template.fromAddr}
                      listRequest={AddressAPI.all} toShort={AddressJsx.toShort}
        />,

        <EntitySelect key={i()} label={"to"} valueRef={template.toAddr}
                      listRequest={AddressAPI.all} toShort={AddressJsx.toShort}
        />
    ]
}
