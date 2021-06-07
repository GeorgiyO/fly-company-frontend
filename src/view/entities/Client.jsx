import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";
import {ProductJsx} from "src/view/entities/Product";

export const ClientJsx = {
    toJsx(item) {
        return (
            <div>
                {Entry.of("passport number", item.passportNumber)}
                {Entry.of("name", item.name)}
                {Entry.of("phone", item.phone)}
                {Entry.of("address", item.address)}
                {Entry.of("delivery", item.delivery ? "yes" : "no")}
                {Entry.of("is credit", item.credit ? "yes" : "no")}
                {Entry.of("payment type", item.paymentType.type)}
                {Entry.of("product", ProductJsx.toLink(item.product))}
            </div>
        )
    },
    toShort(item) {
        return item.name;
    },
    toLink(item) {
        return (
            <div>
                <Link to={"/client/" + item.passportNumber}>{
                    ClientJsx.toShort(item)
                }</Link>
            </div>
        )
    }
}