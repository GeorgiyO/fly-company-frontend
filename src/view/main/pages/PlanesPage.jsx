import React from "react";
import {useRouteMatch} from "react-router-dom";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {Observable} from "src/domain/observable";
import {API, Template} from "src/model/entities/Planes";
import {PlanesJsx} from "src/view/entities/Planes";
import {Input} from "src/view/components/input";
import {List} from "src/view/components/PageTemplates/ListPageTemplate";
import {Page} from "src/view/components/PageTemplates/EntityPageTemplate";
import {Add} from "src/view/components/PageTemplates/AddPageTemplate";
import {Update} from "src/view/components/PageTemplates/UpdatePageTemplate";

export function PlanesPage() {

    const [cashier] = Observable.useWatch(session.role.cashier);
    const url = useRouteMatch().url;

    return new MenuBuilder(url)
        .addLink("", "Planes list")
        .addLink("/add", "Add plane", cashier)

        .addRoute("/add",
            () => <Add
                API={API}
                Template={Template}
                url={url}
                Inputs={Inputs}
                label={"Plane"}
            />, cashier)

        .addRoute("/update/:id",
            () => <Update
                API={API}
                Template={Template}
                url={url}
                Inputs={Inputs}
                label={"Plane"}
            />, cashier)

        .addRoute("/:id",
            () => <Page
                API={API}
                showDelete={cashier}
                showUpdate={cashier}
                toJsx={PlanesJsx.toJsx}
                url={url}
            />)

        .addRoute("",
            () => <List
                supplier={API.all}
                toJsx={PlanesJsx.toLink}
            />)

        .build();
}

function Inputs({template}) {
    return [
        <Input key={0}
               valueRef={template.description}
               label={"description"}
        />
    ];
}