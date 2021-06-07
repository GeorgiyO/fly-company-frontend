import React from "react";
import {Observable} from "src/domain/observable";
import {useRouteMatch} from "react-router-dom";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {Add} from "src/view/components/PageTemplates/AddPageTemplate";
import {ModerAPI, ModerTemplate} from "src/model/entities/Moder";
import {Input} from "src/view/components/input";
import {Page} from "src/view/components/PageTemplates/EntityPageTemplate";
import {ModerJsx} from "src/view/entities/Moder";
import {List} from "src/view/components/PageTemplates/ListPageTemplate";

export function ModerPage() {

    const [admin] = Observable.useWatch(session.role.admin);
    const url = useRouteMatch().url;

    return new MenuBuilder(url)
        .addLink("", "Moder list", admin)
        .addLink("/add", "Add Moder", admin)

        .addRoute("/add",
            () => <Add
                API={ModerAPI}
                Template={ModerTemplate}
                url={url}
                Inputs={Inputs}
                label={"Moder"}
            />, admin)

        .addRoute("/:id",
            () => <Page
                API={ModerAPI}
                showDelete
                toJsx={ModerJsx.toJsx}
                url={url}
            />, admin)

        .addRoute("",
            () => <List
                supplier={ModerAPI.all}
                toJsx={ModerJsx.toLink}
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
