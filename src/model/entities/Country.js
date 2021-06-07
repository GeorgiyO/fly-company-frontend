import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

export const CountryAPI = APIBuilder.full("/country");

export class CountryTemplate extends AbstractTemplate {
    name = Observable.field();
}