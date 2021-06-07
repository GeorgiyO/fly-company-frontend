import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";
import {CountryJsx} from "src/view/entities/Country";
import {BrandJsx} from "src/view/entities/Brand";
import {SpecificationJsx} from "src/view/entities/Specification";
import {ModelJsx} from "src/view/entities/Model";

export const ProductJsx = {
    toJsx(item) {
        return (
            <div>
                {Entry.of("code", item.code)}
                {Entry.of("available", item.available ? "yes" : "no")}
                {Entry.of("availability date", new Date(item.availabilityDate).toString())}
                {Entry.of("price", item.price)}
                {Entry.of("model", ModelJsx.toLink(item.model))}
                {Entry.of("country", CountryJsx.toLink(item.country))}
                {Entry.of("brand", BrandJsx.toLink(item.brand))}
                {Entry.of("specification", SpecificationJsx.toLink(item.specification))}
            </div>
        )
    },
    toShort(item) {
        return item.code + " " + ModelJsx.toShort(item.model);
    },
    toLink(item) {
        return (
            <div>
                <Link to={"/product/" + item.code}>{
                    ProductJsx.toShort(item)
                }</Link>
            </div>
        )
    }
}