import React from "react";
import {Entry} from "src/view/components/entry";
import {Link} from "react-router-dom";

export const AddressJsx = {
    toJsx(address) {
        return (
            <div>
                {Entry.of("id", address.id)}
                {Entry.of("address", address.value)}
            </div>
        );
    },
    toShort(address) {
        return address.value;
    },
    toLink(address) {
        return (
            <div>
                <Link to={"/address/" + address.id}>{AddressJsx.toShort(address)}</Link>
            </div>
        );
    }
}
