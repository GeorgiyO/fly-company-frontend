import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

export const SpecificationAPI = APIBuilder.full("/specification");

export class SpecificationTemplate extends AbstractTemplate {
    doorsCount = Observable.field();
    seatsCount = Observable.field();
    engineWorkingVolume = Observable.field();
    enginePos = Observable.field();
    bodyType = Observable.idObj();
    engineType = Observable.idObj();
}