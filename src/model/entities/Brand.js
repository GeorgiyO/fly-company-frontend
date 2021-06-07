import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";
import {sendRequest} from "src/model/sendRequest";

export const BrandAPI = APIBuilder.full("/brand");

BrandAPI.withSales = (id) =>
    sendRequest("GET", `/brand/with-sales/${id}`)
        .then((response) => response.json());

BrandAPI.salesTotal = () =>
    sendRequest("GET", "/brand/sales-total")
        .then((response) => response.text());

export class BrandTemplate extends AbstractTemplate {
    name = Observable.field();
}
