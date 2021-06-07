import React from "react";
import {Observable} from "src/domain/observable";
import {Input} from "src/view/components/input";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {BrandAPI, BrandTemplate} from "src/model/entities/Brand";
import {BrandJsx} from "src/view/entities/Brand";
import {Add} from "src/view/components/PageTemplates/AddPageTemplate";
import {Update} from "src/view/components/PageTemplates/UpdatePageTemplate";
import {Page} from "src/view/components/PageTemplates/EntityPageTemplate";
import {List} from "src/view/components/PageTemplates/ListPageTemplate";
import {useRequest} from "src/model/sendRequest";
import {handleApiError} from "src/view/components/apiErrorHandler";
import {Entry} from "src/view/components/entry";

export function Brand() {

    const [moder] = Observable.useWatch(session.role.moder);

    return new MenuBuilder("/brand")
        .addLink("", "Brands list")
        .addLink("/add", "Add brand", moder)

        .addRoute("/add",
            () => <Add
                API={BrandAPI}
                Template={BrandTemplate}
                url={"/brand"}
                Inputs={Inputs}
                label={"Brand"}
            />, moder)

        .addRoute("/update/:id",
            () => <Update
                API={BrandAPI}
                Template={BrandTemplate}
                url={"/brand"}
                Inputs={Inputs}
                label={"Brand"}
            />, moder)

        .addRoute("/:id",
            () => <Page
                API={BrandAPI}
                showUpdate={moder}
                showDelete={moder}
                toJsx={BrandJsx.toJsx}
                url={"/brand"}
                entityRequest={BrandAPI.withSales}
            />)

        .addRoute("", BrandsList)

        .build();
}

function Inputs({template}) {
    return (
        <div>
            <Input type={"text"} label={"name"} valueRef={template.name}/>
        </div>
    )
}

function BrandsList() {

    const [totalSales, pending, error] = useRequest(BrandAPI.salesTotal);

    if (pending) return "...loading";
    if (error) {
        handleApiError("on get total sales", error);
        return "error";
    }

    return (
        <div>
            {Entry.of("total sales", totalSales)}
            <List supplier={BrandAPI.all}
                  toJsx={BrandJsx.toLink}
            />
        </div>
    )
}