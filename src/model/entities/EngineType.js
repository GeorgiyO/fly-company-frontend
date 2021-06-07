import {APIBuilder} from "src/model/ApiBuilder";
import {AbstractTemplate} from "src/model/AbstractTemplate";
import {Observable} from "src/domain/observable";

export const EngineTypeAPI = APIBuilder.full("/engine-type");

export class EngineTypeTemplate extends AbstractTemplate {
    type = Observable.field();
}