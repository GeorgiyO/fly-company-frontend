import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

export const BodyTypeAPI = APIBuilder.full("/body-type");

export class BodyTypeTemplate extends AbstractTemplate {
    type = Observable.field();
}