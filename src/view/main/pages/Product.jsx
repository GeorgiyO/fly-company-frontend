import React from "react";
import {Checkbox, Input} from "src/view/components/input";
import {EntitySelect} from "src/view/components/entity/EntitySelect";
import {CountryAPI} from "src/model/entities/Country";
import {CountryJsx} from "src/view/entities/Country";
import {BrandAPI} from "src/model/entities/Brand";
import {BrandJsx} from "src/view/entities/Brand";
import {SpecificationAPI} from "src/model/entities/Specification";
import {SpecificationJsx} from "src/view/entities/Specification";
import {Observable} from "src/domain/observable";
import {MenuBuilder} from "src/view/components/entity/MenuBuilder";
import {ProductAPI, ProductTemplate} from "src/model/entities/Product";
import {ProductJsx} from "src/view/entities/Product";
import {ModelAPI} from "src/model/entities/Model";
import {ModelJsx} from "src/view/entities/Model";
import {useHistory, useParams} from "react-router-dom";
import {List} from "src/view/components/PageTemplates/ListPageTemplate";

export function Product() {

    const [moder] = Observable.useWatch(session.role.moder);

    return new MenuBuilder("/product")
        .addRoute("/search/:brandId/:modelId", SearchResult)
        .addRoute("/search", SearchPanel)
        .default({
            API: ProductAPI,
            Template: ProductTemplate,
            singleName: "Product",
            manyName: "Products",
            Inputs,
            role: moder,
            JsxConverterObject: ProductJsx,
            toId: (_) => _.code
        })
        .addLink("/search", "Search")
        .build();
}

function Inputs({template}) {
    return (
        <div>
            <Checkbox label={"available"} valueRef={template.available}/>
            <Input type={"date"} label={"availability date"} valueRef={template.availabilityDate}/>
            <Input type={"number"} label={"price"} valueRef={template.price}/>
            <EntitySelect listRequest={ModelAPI.all} toShort={ModelJsx.toShort}
                          label={"model"} valueRef={template.model}
            />
            <EntitySelect listRequest={CountryAPI.all} toShort={CountryJsx.toShort}
                          label={"country"} valueRef={template.country}
            />
            <EntitySelect listRequest={BrandAPI.all} toShort={BrandJsx.toShort}
                          label={"brand"} valueRef={template.brand}
            />
            <EntitySelect listRequest={SpecificationAPI.all} toShort={SpecificationJsx.toShort}
                          label={"specification"} valueRef={template.specification}
            />
        </div>
    )
}

function SearchPanel() {

    const history = useHistory();

    const brand = Observable.field();
    const model = Observable.field();

    const searchAction = () => {
        console.log(brand);
        console.log(model);
        history.push(`/product/search/${brand.get().id}/${model.get().id}`);
    }

    return (
        <div className={"entity-form"}>
            <h2>Search products:</h2>
            <EntitySelect listRequest={BrandAPI.all} toShort={BrandJsx.toShort}
                          label={"brand"} valueRef={brand}
            />
            <EntitySelect listRequest={ModelAPI.all} toShort={ModelJsx.toShort}
                          label={"model"} valueRef={model}
            />
            <button onClick={searchAction}>Search</button>
        </div>
    )
}

function SearchResult() {
    const {brandId, modelId} = useParams();

    return <List supplier={() => ProductAPI.searchByBrandAndModel(brandId, modelId)}
                 toJsx={ProductJsx.toLink}
    />
}

