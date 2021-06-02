import React from "react";
import {Observable} from "src/domain/observable";
import {useRouteMatch} from "react-router-dom";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {Add} from "src/view/components/PageTemplates/AddPageTemplate";
import {API, Template} from "src/model/entities/Address";
import {Input} from "src/view/components/input";
import {Update} from "src/view/components/PageTemplates/UpdatePageTemplate";
import {Page} from "src/view/components/PageTemplates/EntityPageTemplate";
import {List} from "src/view/components/PageTemplates/ListPageTemplate";
import {AddressJsx} from "src/view/entities/Address";

export function AddressPage() {

    const [cashier] = Observable.useWatch(session.role.cashier);
    const url = useRouteMatch().url;

    return new MenuBuilder(url)
        .addLink("", "Address list")
        .addLink("/add", "Add address", cashier)

        .addRoute("/add",
            () => <Add
                API={API}
                Template={Template}
                url={"/address"}
                Inputs={Inputs}
                label={"Address"}
            />, cashier)

        .addRoute("/update/:id",
            () => <Update
                API={API}
                Template={Template}
                url={"/address"}
                Inputs={Inputs}
                label={"Address"}
            />, cashier
        )

        .addRoute("/:id",
            () => <Page
                API={API}
                showDelete={cashier}
                showUpdate={cashier}
                toJsx={AddressJsx.toJsx}
                url={"/address"}
            />)

        .addRoute("",
            () => <List
                supplier={API.all}
                toJsx={AddressJsx.toLink}
            />)

        .build();

}

function Inputs({template}) {
    return [
        <Input key={0}
               valueRef={template.value}
               label={"address"}
        />
    ];
}