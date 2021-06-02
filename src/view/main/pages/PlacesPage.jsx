import React from "react";
import {Observable} from "src/domain/observable";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {Add} from "src/view/components/PageTemplates/AddPageTemplate";
import {API, Template} from "src/model/entities/Places";
import {Input} from "src/view/components/input";
import {EntitySelect} from "src/view/components/entity/entitySelect";
import {API as ScheduleAPI} from "src/model/entities/Schedule";
import {ScheduleJsx} from "src/view/entities/Schedule";
import {Page} from "src/view/components/PageTemplates/EntityPageTemplate";
import {PlacesJsx} from "src/view/entities/Places";
import {List} from "src/view/components/PageTemplates/ListPageTemplate";

export function PlacesPage() {

    const [cashier] = Observable.useWatch(session.role.cashier);
    const url = useRouteMatch().url;

    return new MenuBuilder(url)
        .addLink("", "Places list")
        .addLink("/free", "Free places list")
        .addLink("/add", "Add item", cashier)

        .addRoute("/add",
            () => <Add
                API={API}
                Template={Template}
                url={url}
                Inputs={Inputs}
                label={"Place"}
            />, cashier)

        .addRoute("/free",
            () => <List
                supplier={API.free}
                toJsx={PlacesJsx.toLink}
            />)

        .addRoute("/:id",
            () => <Page
                API={API}
                showDelete={cashier}
                showUpdate={false}
                toJsx={PlacesJsx.toJsx}
                url={url}
            />)

        .addRoute("",
            () => <List
                supplier={API.all}
                toJsx={PlacesJsx.toLink}
            />)

        .build();
}

function Inputs({template}) {
    let _i = 0;
    let i = () => _i++;
    return [
        <Input key={i()} type={"number"} label={"total"} valueRef={template.total}/>,
        <EntitySelect key={i()} label={"schedule item"} valueRef={template.scheduleItem}
                      listRequest={ScheduleAPI.all} toShort={ScheduleJsx.toShort}/>
    ];
}
