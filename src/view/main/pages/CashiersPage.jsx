import React from "react";
import {Observable} from "src/domain/observable";
import {useRouteMatch} from "react-router-dom";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {Add} from "src/view/components/PageTemplates/AddPageTemplate";
import {API, Template} from "src/model/entities/Cashiers";
import {Input} from "src/view/components/input";
import {Page} from "src/view/components/PageTemplates/EntityPageTemplate";
import {CashiersJsx} from "src/view/entities/Cashiers";
import {List} from "src/view/components/PageTemplates/ListPageTemplate";

export function CashiersPage() {

    const [admin] = Observable.useWatch(session.role.admin);
    const url = useRouteMatch().url;

    return new MenuBuilder(url)
        .addLink("", "Cashiers list", admin)
        .addLink("/add", "Add cashier", admin)

        .addRoute("/add",
            () => <Add
                API={API}
                Template={Template}
                url={url}
                Inputs={Inputs}
                label={"Cashier"}
            />, admin)

        .addRoute("/:id",
            () => <Page
                API={API}
                showDelete
                toJsx={CashiersJsx.toJsx}
                url={url}
            />, admin)

        .addRoute("",
            () => <List
                supplier={API.all}
                toJsx={CashiersJsx.toLink}
            />, admin)

        .build();
}

function Inputs({template}) {
    let _i = 0;
    let i = () => _i++;
    return [
        <Input key={i()} type={"text"} valueRef={template.login} label={"login"}/>,
        <Input key={i()} type={"text"} valueRef={template.password} label={"password"}/>,
    ];
}
