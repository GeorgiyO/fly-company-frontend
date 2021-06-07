import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

export const ModelAPI = APIBuilder.full("/model");

export class ModelTemplate extends AbstractTemplate {
    name = Observable.field()
}