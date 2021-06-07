import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

export const ClientAPI = APIBuilder.full("/client");

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
