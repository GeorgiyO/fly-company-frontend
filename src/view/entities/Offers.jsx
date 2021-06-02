import React from "react";
import {Entry} from "src/view/components/entry";
import {PlacesJsx} from "src/view/entities/Places";
import {Link} from "react-router-dom";

export const OffersJsx = {
    toJsx(offer) {
        const pass = offer.passenger;
        return (
            <div>
                {Entry.of("id", offer.id)}
                {Entry.of("place", PlacesJsx.toLink(offer.place))}
                <p>Passenger:</p>
                {Entry.of("name", passFullName(pass))}
                {Entry.of("document", pass.docType + " " + pass.docNumber)}
            </div>
        );
    },
    toShort(offer) {
        const pass = offer.passenger;
        return PlacesJsx.toShort(offer.place) + " - " + passFullName(pass);
    },
    toLink(offer) {
        return (
            <div>
                <Link to={"/offers/" + offer.id}>{OffersJsx.toShort(offer)}</Link>
            </div>
        )
    }
}

function passFullName(pass) {
    return pass.firstName + " " + pass.secondName + " " + pass.patronymic
}