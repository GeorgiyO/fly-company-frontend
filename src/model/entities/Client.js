import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";
import {sendRequest} from "src/model/sendRequest";

export const ClientAPI = APIBuilder.full("/client");

ClientAPI.searchByBrand =
    (brandId) => sendRequest("GET", `/client/search/brand/${brandId}`)
        .then((response) => response.json());


ClientAPI.searchByPaymentType =
    (paymentTypeId) => sendRequest("GET", `/client/search/payment-type/${paymentTypeId}`)
        .then((response) => response.json());

export class ClientTemplate extends AbstractTemplate {
    passportNumber = Observable.field();
    name = Observable.field();
    phone = Observable.field();
    address = Observable.field();
    delivery = Observable.field();
    credit = Observable.field();
    paymentType = Observable.idObj();
    product = Observable.idObj();
}
